import { Component, OnInit } from "@angular/core";
import { DataRequestsService } from "../../request-to-BE/data-requests.service";
import { RequestsService } from "../../logInAndSignupService/requests.service";
import { AlertController } from "@ionic/angular";
import Swal from 'sweetalert2';
import { CheckTutorial } from "../../providers/check-tutorial.service";
import { calendar } from "../../interfaces/user-options";



@Component({
  selector: "app-reportings",
  templateUrl: "./reportings.page.html",
  styleUrls: ["./reportings.page.scss"],
})
export class ReportingsPage implements OnInit {
  public selectedTypeDate = {
    week: '',
    month: '',
    year: ''
  }
  public monthlyView = this.calendar.returnAllMonthsChoices()
  public weeklyView = [
    {display: '1st', value: 1}, 
    {display: '2nd', value: 2},
    {display: '3rd', value: 3},
    {display: '4th', value: 4}
  ];
  public yearToFilter = 2021;
  //This is used for proceeding to another week selected for a month
  public rowCounter = 0;

  //This is for the user to add his/her attendance
  public currentUserId = "";
  public currentUserData;
  public dataAttendanceToPass = {
    newUser: {
      leader: "",
      member: "",
      type: "",
      date: "",
    },
  }
  public typeOfView = false;
  public counter = 0;

  public typeChoice = "Weekly";
  //selected month by user
  public month: any;
  public monthChoices;
  public selectedMonth = 0;
  //for the users attendance dates
  public paginationCount = 5
  public count = 0
  public classes;
  pageOfItems: Array<any>;

  constructor(
    private datarequest: DataRequestsService,
    private request: RequestsService,
    public alertControl: AlertController,
    public leaders: CheckTutorial,
    public calendar: calendar
  ) {
    this.leaders.chosenDate
  }

  ngOnInit() {
    this.getTheCurrentUser();
  }

  getData(members) {
    this.leaders.getMembersOfCertainLeader(members.target.value.id)
  }

  

  onChangePage(pageOfItems: Array<any>, type) {
    // update current page of items
    if(type == 'add') {
      if(this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount += 5
        this.count += 5
      }
    }else {
      if((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount -= 5
        this.count -= 5
      }
    }
    this.pageOfItems = pageOfItems;
    console.log("DFDFD: ", this.pageOfItems)
  }


  async sundayCelebAttended() {
    const alert = await this.alertControl.create({
      cssClass: "my-custom-class",
      header: "Attendance Added!",
      message: "You now attended the Sunday Celebration!",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async alreadyAttended() {
    const alert = await this.alertControl.create({
      cssClass: "my-custom-class",
      header: "Oopss Sorry!",
      message: "You already have your attendance!",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async unableToAttend() {
    const alert = await this.alertControl.create({
      cssClass: "my-custom-class",
      header: "Wrong Day!",
      message:
        "You can't attend a Sunday Celebration today because today is not Sunday!",
      buttons: ["OK"],
    });

    await alert.present();
  }
  //This is to get the current user's data and also his/her role
  getTheCurrentUser() {
    this.request.getTheCurrentUserIdInStorage().then((res) => {
      this.datarequest.getTheCurrentUser({ userID: res }).subscribe((data) => {
        this.dataAttendanceToPass.newUser.member = data[0].id;
        this.dataAttendanceToPass.newUser.leader = data[0].leader;
      });
    });
  }

  //This will let the user to proceed to another row
  indexCounter(action) {
    if (action == "next") {
      if (this.rowCounter != 35) {
        this.rowCounter += 7;
      }
    } else {
      if (this.rowCounter != 0) {
        this.rowCounter -= 7;
      }
    }
  }
  //This is the function who will filter the current year from chosen
  listOfYears() {
    var startYear = 2019 - 10;
    var currentYear = new Date().getFullYear();
    var years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  }

  // Kini siya nga function kay kuhaon ang selected week
  getSelectedWeek(week: any) {
    this.selectedTypeDate.week = week.target.value
  } 

  // Kini siya nga function kay kuhaon ang selected Month 
  getSelectedMonth(month: any) {
    this.selectedTypeDate.month = month.target.value
    console.log(month.target.value)
  }

  // Kini siya nga function kay kuhaon ang selected year 
  getSelectedYear(year: any) {
    this.selectedTypeDate.year = year.target.value
    console.log(year.target.value)
  }

  


}
