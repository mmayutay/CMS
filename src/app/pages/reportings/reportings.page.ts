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
  public selectedLeader = 0
  public selectedTypeDate = {
    week: new Date(),
    month: new Date(),
    year: new Date()
  }
  public monthlyView = this.calendar.returnAllMonthsChoices()
  public weeklyView = [
    { display: '1st', value: 1 },
    { display: '2nd', value: 2 },
    { display: '3rd', value: 3 },
    { display: '4th', value: 4 }
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
    this.leaders.typeChoice(this.leaders.choice)
  }

  getData(members) {
    this.selectedLeader = members.target.value.id
    this.leaders.getMembersOfCertainLeader(members.target.value.id)
  }



  onChangePage(pageOfItems: Array<any>, type) {
    // update current page of items
    if (type == 'add') {
      if (this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
        this.paginationCount += 5
        this.count += 5
      }
    } else {
      if ((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
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
  // getSelectedWeek(week: any) {
  //   this.selectedTypeDate.week = week.target.value
  //   const members = this.datarequest.getMyCellgroup({ leaderid: this.selectedLeader })
  //   members.subscribe((response: any) => {
  //     response.forEach(element => {
  //       this.returnGroupsAttendance(element, this.calendar.returnWeek(this.selectedTypeDate.month + ' ' + this.selectedTypeDate.year, this.selectedTypeDate.week))
  //     });
  //   })
  // }

  // Kini siya nga function kay kuhaon ang selected Month 
  getSelectedDate(selectedDate: any) {
    const members = this.datarequest.getMyCellgroup({ leaderid: this.selectedLeader })
    members.subscribe((response: any) => {
      response.forEach(element => {
        if(this.typeChoice == 'Weekly') {
          this.returnGroupsAttendance(element, this.calendar.dates(new Date(selectedDate.target.value)))
        }else if(this.typeChoice == 'Monthly') {
          this.returnGroupsAttendance(element, this.calendar.getDaysInMonth(new Date(selectedDate.target.value).getMonth(), new Date(selectedDate.target.value).getFullYear()))
        }else {
          this.returnGroupsAttendance(element, this.calendar.returnDatesOfWholeYear(new Date(selectedDate.target.value).getFullYear() + "-1-1", new Date(selectedDate.target.value).getFullYear() + "-31-12"))
        }
      })
    })
    // this.selectedTypeDate.month = month.target.value
    // const members = this.datarequest.getMyCellgroup({ leaderid: this.selectedLeader })
    // members.subscribe((response: any) => {
    //   response.forEach(element => {
    //     this.returnGroupsAttendance(element, this.calendar.getDaysInMonth(new Date(month.target.value + " " + this.selectedTypeDate.year).getMonth(), 2021))
    //   });
    // })
  }

  // Kini siya nga function kay kuhaon ang selected year 
  // getSelectedYear(year: any) {
  //   this.selectedTypeDate.year = year.target.value
  //   const members = this.datarequest.getMyCellgroup({ leaderid: this.selectedLeader })
  //   members.subscribe((response: any) => {
  //     response.forEach(element => {
  //       this.returnGroupsAttendance(element, this.calendar.returnDatesOfWholeYear(year.target.value + "-1-1", year.target.value + "-31-12"))
  //     });
  //   })
  // }

  // Kini siya nga function kay display na ni siya sa mga students ug sa ilang mga attendance ana nga selected week or month 
  returnGroupsAttendance(member, dates) {
    this.leaders.members.length = 0
    var eventCounter = 0
    var sundayCounter = 0

    const membersAttendance = this.datarequest.getEventAndSCAttendance(member.id)
    membersAttendance.subscribe((attend: any) => {
      attend[0].currentEventsAttendance.forEach(attendance => {
        dates.forEach(day => {
          if ((new Date(attendance.date).getMonth() + '-' + new Date(attendance.date).getDate() + '-' + new Date(attendance.date).getFullYear())
            ==
            (new Date(day).getMonth() + '-' + new Date(day).getDate() + '-' + new Date(day).getFullYear())
          ) {
            eventCounter += 1
          }
        })
      })
      attend[0].currentUserAttendance.forEach(attendance => {
        dates.forEach(day => {
          if ((new Date(attendance.date).getMonth() + '-' + new Date(attendance.date).getDate() + '-' + new Date(attendance.date).getFullYear())
            ==
            (new Date(day).getMonth() + '-' + new Date(day).getDate() + '-' + new Date(day).getFullYear())
          ) {
            sundayCounter += 1
          }
        })
      })
      this.leaders.members.push({user: member, eventAttendance: eventCounter, SCAttendance: sundayCounter})
    })
  }

  
}
