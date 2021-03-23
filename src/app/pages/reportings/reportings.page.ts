import { Component, OnInit } from "@angular/core";
import { DataRequestsService } from "../../request-to-BE/data-requests.service";
import { RequestsService } from "../../logInAndSignupService/requests.service";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import Swal from 'sweetalert2';


@Component({
  selector: "app-reportings",
  templateUrl: "./reportings.page.html",
  styleUrls: ["./reportings.page.scss"],
})
export class ReportingsPage implements OnInit {
  public hideCalendar = false
  public yearToFilter = 2021;
  //This is an array for yearly display
  public yearChoices = [];
  public yearCounting = 0;
  public yearCounter = [];
  public yearlyArray = [];
  //User is VIP or not
  public userVip = false;
  //This is used for proceeding to another week selected for a month
  public rowCounter = 0;

  //This will get the current users attendance for both event and sunday celebration
  public attendanceInTableView = [];
  public eventAttendanceTableView = [];

  //This is for the user to add his/her attendance
  public currentUserId = "";
  public attendanceOfUserFromBackend;
  public currentUserData;
  public dataAttendanceToPass = {
    newUser: {
      leader: "",
      member: "",
      type: "",
      date: "",
    },
  };
  public currentUserRole = "";
  public typeOfView = false;
  public counter = 0;

  //option in display of date
  public typeOfDisplays = ["Yearly", "Monthly", "Weekly"];
  public typeChoice = "Weekly";
  //selected month by user
  public month: any;
  public monthChoices;

  //get The current date
  public currentTime = new Date();
  //array of users attendance
  // public userAttendanceArray = [];
  //for the calendar
  public dateForAMonthOfAttendance = [];
  public numberOfDaysInAWeek = [];
  //array of dates by month
  public arrayOfDatesForAmonth = [];
  //array of dates by wee

  public lengthOfMonthsDate = [];
  //for the selected month
  public selectedMonth = 0;
  public chosenMonth = 0;
  public currentMonth = 0;
  //for the users attendance dates
  public attendanceDates = [];
  public paginationCount = 5
  public count = 0
  public classes;
  pageOfItems: Array<any>;

  constructor(
    private datarequest: DataRequestsService,
    private request: RequestsService,
    public alertControl: AlertController,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.chosenMonth = this.currentTime.getMonth();
    //function who will get all the dates for a month
    this.firstDayOftheMonthAndLast();
    this.listOfYears();
    this.getVipOrNot();
    this.currentUsersAttendance();
    this.getCurrentMonth();
    this.getAllDateFromUser();
    this.showMembersBelongToThisGroup();
    this.getTheCurrentUser();
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







  
  convertMonth(monthInput) {
    this.selectedMonth = monthInput;
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    this.month = month[monthInput];
    this.monthChoices = month;
  }

  //This is for the yearly typeChoice
  monthSelectedClick(month) {
    this.typeChoice = "Monthly";
    this.month = month;
    this.chosenMonth = this.monthChoices.indexOf(this.month);
    this.selectedMonth = this.monthChoices.indexOf(this.month);
    this.firstDayOftheMonthAndLast();
    this.getAllDateFromUser();
  }

  //This is for the certain year that the user chose
  yearChose(value) {
    var partialDataHandler;
    this.yearToFilter = value.detail.value;
    this.firstDayOftheMonthAndLast();
    this.datarequest
      .usersAttendanceChosenYear(
        this.month,
        value.detail.value,
        this.currentUserId
      )
      .subscribe((data) => {
        partialDataHandler = data;
        if (partialDataHandler.length != 0) {
          this.dateShadingIfAttended(partialDataHandler);
        } else {
          if (this.currentTime.getFullYear() > parseInt(value.detail.value)) {
            this.getTheDatesOfMonthChosen();
          }
        }
      });
  }

  //For the month the user chose
  monthChose(value) {
    this.counter = 0;
    this.month = value.detail.value;
    this.chosenMonth = this.monthChoices.indexOf(this.month);
    this.selectedMonth = this.monthChoices.indexOf(this.month);
    this.counter += 1;
    if (this.counter == 1) {
      this.firstDayOftheMonthAndLast();
      this.onlySundaysOfMonth(value.detail);
    }
  }
  //choosing for display
  typeOfDisplay(value) {
    this.typeChoice = value.detail.value;
    if (value.detail.value != "Yearly") {
      this.firstDayOftheMonthAndLast();
      this.getAllDateFromUser();
    } else {
      this.yearlyCounter();
    }
  }

  getCurrentDate() {
    var date = new Date();
    var dateId = date.getDate().toString();
    if (this.typeChoice != "Weekly") {
      document.getElementById(dateId).style.backgroundColor =
        "rgb(210, 210, 210, 0.7)";
    }
  }

  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  getCurrentMonth() {
    var date = new Date();
    this.currentMonth = date.getMonth();
  }

  firstDayOftheMonthAndLast() {
    var counter = 0;
    this.numberOfDaysInAWeek.length = 0;
    this.lengthOfMonthsDate.length = 0;
    this.arrayOfDatesForAmonth.length = 0;
    var daysInAmonth;
    var date = new Date(this.yearToFilter, this.chosenMonth);
    this.convertMonth(date.getMonth());
    for (let index = 0; index < 40; index++) {
      if (this.arrayOfDatesForAmonth.length < this.getDaysInMonth(this.chosenMonth, this.yearToFilter)) {
        daysInAmonth = new Date(date.getFullYear(), date.getMonth(), index + 1);
        this.arrayOfDatesForAmonth.push({
          date: daysInAmonth.getDate(),
          day: daysInAmonth.getDay(),
        });
      } else {
        this.arrayOfDatesForAmonth.push({
          date: "",
          day:
            this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1]
              .day + 1,
        });
      }
    }
    for (let index = 0; index < 45; index++) {
      if (this.numberOfDaysInAWeek.length != 7) {
        this.numberOfDaysInAWeek.push(counter);
      } else {
        this.lengthOfMonthsDate.push(this.numberOfDaysInAWeek);
        this.numberOfDaysInAWeek = [];
        this.numberOfDaysInAWeek.push(counter);
      }
      counter += 1;
    }

    for (let index = 0; index < 45; index++) {
      if (this.arrayOfDatesForAmonth[0].day != 0) {
        this.arrayOfDatesForAmonth.unshift({
          date: "",
          day: this.arrayOfDatesForAmonth[0].day - 1,
        });
      } else if (
        this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day !=
        6
      ) {
        this.arrayOfDatesForAmonth.push({
          date: "",
          day:
            this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1]
              .day + 1,
        });
      }
    }
  }
  //Get all sundays of a month
  onlySundaysOfMonth(params) {
    var date;
    var usersAttedanceOfAMonth;
    this.datarequest.getTheCurrentUserAttendance(this.currentUserId, this.month).subscribe(data => {
      usersAttedanceOfAMonth = data;
      if(usersAttedanceOfAMonth.length == 0) {
        if(this.currentTime.getFullYear() == this.yearToFilter ) {
          this.selectedMonthNotCurrentMonth();
          if(this.selectedMonth < this.currentMonth) {
            for (let index = 0; index < this.arrayOfDatesForAmonth.length; index++) {
              if(this.arrayOfDatesForAmonth[index].day == 0) {
                if(this.arrayOfDatesForAmonth[index].date != "") {
                  document.getElementById(this.arrayOfDatesForAmonth[index].date.toString()).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
                }
              }
            }
          }else {
            this.selectedMonthNotCurrentMonth();
          } 
        }else {
          this.selectedMonthNotCurrentMonth();
        }
      }else {
        if(this.currentTime.getFullYear() > this.yearToFilter) {
          this.dateShadingIfAttended(usersAttedanceOfAMonth)
          this.selectedMonthNotCurrentMonth();
        }else if(this.currentTime.getFullYear() == this.yearToFilter) {
          for (let i = 0; i < usersAttedanceOfAMonth.length; i++) {
            date = new Date(usersAttedanceOfAMonth[i]);
            document.getElementById(date.getDate().toString()).style.backgroundColor = "rgba(90, 255, 105, 0.7)";
          }
        }else {
          this.selectedMonthNotCurrentMonth();
        }
      }
    })
  }
  


  //This calendar renders the calendar of a certain month that the user chose
  getAllDateFromUser() {
    var partialDataHandler;
    this.request.getTheCurrentUserIdInStorage().then((res) => {
      this.currentUserId = res;
      this.getSundayAndEventAttendance();
      this.datarequest
        .getTheCurrentUserAttendance(res, this.month)
        .subscribe((data) => {
          partialDataHandler = data;
          if (partialDataHandler.length != 0) {
            this.dateShadingIfAttended(partialDataHandler);
          } else {
            if (this.currentMonth > this.selectedMonth) {
              this.getTheDatesOfMonthChosen();
            } else if (this.currentMonth == this.selectedMonth) {
              this.currentMonthIsEquealToSelected();
            } else {
              if (this.typeChoice == "Yearly") {
                this.getCurrentDate();
                this.firstDayOftheMonthAndLast();
              }
            }
          }
        });
    });
  }

  forAllTheDateOfAttendance(index: number) {
    if (!this.dateForAMonthOfAttendance.includes(this.arrayOfDatesForAmonth[index].date)) {
      this.dateForAMonthOfAttendance.push(this.arrayOfDatesForAmonth[index].date);
    }
  }
  shadedTheAttendanceOfCurrentUser() {
    if (this.typeChoice != "Weekly") {
      for (let index = 0; index < this.attendanceDates.length; index++) {
        document.getElementById(
          this.attendanceDates[index].toString()
        ).style.backgroundColor = "rgba(90, 255, 105, 0.7)";
      }
    }
  }

  selectedMonthNotCurrentMonth() {
    if (this.currentMonth < this.selectedMonth) {
      for (let index = 0; index < this.arrayOfDatesForAmonth.length; index++) {
        document.getElementById(this.currentTime.getDate().toString()).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        document.getElementById(this.arrayOfDatesForAmonth[index].date.toString()).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      }
    } else if (this.currentMonth == this.selectedMonth) {
      this.getCurrentDate();
    }
  }

  getTheDatesOfMonthChosen() {
    var daysInAmonth;
    var date = new Date(this.yearToFilter, this.chosenMonth);
    for (let index = 0; index < this.getDaysInMonth(date.getMonth(), date.getFullYear()); index++) {
      daysInAmonth = new Date(date.getFullYear(), date.getMonth(), index + 1);
      if (daysInAmonth.getDay() == 0) {
        document.getElementById("" + daysInAmonth.getDate()).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
      }
    }
  }

  currentMonthIsEquealToSelected() {
    this.getCurrentDate();
    if (this.typeChoice != "Weekly") {
      for (let index = 0; index < this.arrayOfDatesForAmonth.length; index++) {
        if (this.arrayOfDatesForAmonth[index].day == 0) {
          if (
            this.currentTime.getDate() > this.arrayOfDatesForAmonth[index].date
          ) {
            if (this.arrayOfDatesForAmonth[index].date != "") {
              document.getElementById(
                this.arrayOfDatesForAmonth[index].date.toString()
              ).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
            }
          }
        }
      }
    }
  }

  typeOfViewController(params) {
    if (params == "Calendar") {
      this.typeOfView = false;
    } else {
      this.typeOfView = true;
    }
  }
  //This function is accessing the current user's role, the naming of the function is not efficient
  showMembersBelongToThisGroup() {
    this.request.getTheUserRoleFromTheStorage().then((res) => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe((result) => {
        this.currentUserData = result;
        this.currentUserRole = result[0].roles;
      });
    });
  }

  //This function is for the user for his/her attendance
  addAttendance() {
    this.datarequest.getTheIfCurrentUserIsAttended().then(result => {
      if(result == false) {
        this.datarequest.addAttendance(this.dataAttendanceToPass).subscribe((data) => {
          if (data != false) {
            this.datarequest.storeIfCurrentUserAlreadyAttended(true)
            this.sundayCelebAttended();
          } else {
            this.unableToAttend();
          }
        })
      }else {
        this.alreadyAttended()
      }
    })
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
        this.dataAttendanceToPass.newUser.type = this.currentUserData[0].id;
        this.dataAttendanceToPass.newUser.date = this.currentTime.toString();
      });
    });
  }

  //This function will let the user get his/her attendance to both events and sunday celebration attendance
  currentUsersAttendance() {
    var partialDataHandler;
    var date;
    var concatenateAndPush = "";
    this.request.getTheCurrentUserIdInStorage().then((res) => {
      this.datarequest
        .getTheCurrentUserAttendance(res, this.month)
        .subscribe((response) => {
          this.attendanceOfUserFromBackend = response;
          partialDataHandler = response;
          for (let index = 0; index < partialDataHandler.length; index++) {
            date = new Date(partialDataHandler[index]);
            this.convertMonth(date.getMonth());
            concatenateAndPush = this.month + "-" + date.getDate() + "-" + date.getFullYear();
            this.attendanceInTableView.push(concatenateAndPush);
          }
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
  //This function will classify
  getVipOrNot() {
    this.request.getUserIsVipOrNot().then((res) => {
      this.userVip = res;
      if (this.userVip) {
        this.menuCtrl.enable(false);
      } else {
        this.menuCtrl.enable(true);
      }
    });
  }
  logout() {
    this.request.logoutService().then((res) => {
      location.reload();
    });
    this.router.navigate([""]);
  }

  //This function is used for the display all month on a certain year
  yearlyCounter() {
    this.yearCounting += 1;
    if (this.yearCounting == 1) {
      for (let index = 0; index < 15; index++) {
        if (this.yearCounter.length != 3) {
          this.yearCounter.push(this.monthChoices[index]);
        } else {
          if (this.yearCounter.length == 3) {
            this.yearlyArray.push(this.yearCounter);
          }   
          this.yearCounter = [];
          this.yearCounter.push(this.monthChoices[index]);
        }
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
    this.yearChoices = years;
  }
  dateShadingIfAttended(partialDataHandler) {
    var time;
    for (let i = 0; i < this.arrayOfDatesForAmonth.length; i++) {
      for (let j = 0; j < partialDataHandler.length; j++) {
        time = new Date(partialDataHandler[j]);
        if (this.arrayOfDatesForAmonth[i].day == time.getDay()) {
          if (this.arrayOfDatesForAmonth[i].date != "") {
            this.forAllTheDateOfAttendance(i);
            if (this.arrayOfDatesForAmonth[i].date > this.currentTime.getDate()) {
              if (this.typeChoice != "Weekly") {
                document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }
            } else {
              if (this.arrayOfDatesForAmonth[i].date == time.getDate()) {
                this.attendanceDates.push(this.arrayOfDatesForAmonth[i].date);
              } else {
                if (this.typeChoice != "Weekly") {
                  document.getElementById(
                    this.arrayOfDatesForAmonth[i].date
                  ).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
                }
              }
            }
          }
        }
        this.selectedMonthNotCurrentMonth();
      }
    }
    this.shadedTheAttendanceOfCurrentUser();
  }

  //Get the current user's attendance in both sunday celebration and events
  getSundayAndEventAttendance() {
    var date;
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    this.datarequest
      .getEventAndSCAttendance(this.currentUserId)
      .subscribe((data) => {
        if(data[0].currentEventsAttendance.length != 0) {
          for (let index = 0; index < data[0].currentEventsAttendance.length; index++) {
            date = new Date(data[0].currentEventsAttendance[index].date);
            this.eventAttendanceTableView.push(month[date.getMonth()] + '-' + date.getDate() + '-' + date.getFullYear())
            if(this.typeChoice != 'Weekly') {
              if(this.chosenMonth == date.getMonth()) {
                document.getElementById(date.getDate().toString()).style.backgroundColor = "rgba(90, 255, 105, 0.7)";
              }
            }
          }
        }
      });
  }
}
