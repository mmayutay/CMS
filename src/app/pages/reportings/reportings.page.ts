import { Component, OnInit } from "@angular/core";
import { DataRequestsService } from "../../request-to-BE/data-requests.service";
import { RequestsService } from "../../logInAndSignupService/requests.service";

@Component({
  selector: "app-reportings",
  templateUrl: "./reportings.page.html",
  styleUrls: ["./reportings.page.scss"],
})
export class ReportingsPage implements OnInit {
  public counter = 0

  //option in display of date
  public typeOfDisplays = ['Yearly', 'Monthly', 'Weekly'];
  public typeChoice = "Weekly";
  //selected month by user
  public month: any;
  public monthChoices;

  //get The current date
  public currentTime = new Date();
  //array of users attendance
  public userAttendanceArray = [];
  //for the calendar
  public dateForAMonthOfAttendance = [];
  public numberOfDaysInAWeek = [];
  //array of dates by month
  public arrayOfDatesForAmonth = [];
  //array of dates by week
  public dateWeekly  = []

  public lengthOfMonthsDate = [];
  //for the selected month
  public selectedMonth = 0;
  public chosenMonth = 0;
  public currentMonth = 0;
  //for the users attendance dates
  public attendanceDates = [];

  constructor(
    private datarequest: DataRequestsService,
    private request: RequestsService
  ) {}

  ngOnInit() {
    this.chosenMonth = this.currentTime.getMonth();
    this.getCurrentMonth();
    this.getAllDateFromUser();
    this.firstDayOftheMonthAndLast();
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
    this.monthChoices = month
  }

  //For the month the user chose
  monthChose(value) {    
    this.counter = 0
    this.month = value.detail.value;
    this.chosenMonth = this.monthChoices.indexOf(this.month);
    this.counter += 1
    if(this.counter == 1) {
      this.getAllDateFromUser();
      this.firstDayOftheMonthAndLast();
    }
  }
  //choosing for display
  typeOfDisplay(value){
    this.typeChoice = value.detail.value
  }

  getCurrentDate() {
    var date = new Date();
    var dateId = date.getDate().toString();
    if(this.typeChoice != 'Weekly' ) {
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
    this.lengthOfMonthsDate.length = 0
    this.arrayOfDatesForAmonth.length = 0
    var daysInAmonth;
    var counter = 0;
    var date = new Date(2021, this.chosenMonth);
    for (let index = 0; index < 40; index++) {
      if (this.arrayOfDatesForAmonth.length < this.getDaysInMonth(this.chosenMonth, 2021)) {
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
    this.convertMonth(date.getMonth());
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
      } else if (this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day != 6) {
        this.arrayOfDatesForAmonth.push({
          date: "",
          day: this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day + 1, });
      }
    }
  }

  //This calendar renders the calendar of a certain month that the user chose
  getAllDateFromUser() {
    var partialDataHandler;
    var time;
    this.request.getTheCurrentUserIdInStorage().then((res) => {
      this.datarequest
        .getTheCurrentUserAttendance(res, this.month)
        .subscribe((data) => {
          partialDataHandler = data;
          if (partialDataHandler.length != 0) {
            for (let i = 0; i < this.arrayOfDatesForAmonth.length; i++) {
              for (let j = 0; j < partialDataHandler.length; j++) {
                time = new Date(partialDataHandler[j]);
                if (this.arrayOfDatesForAmonth[i].day == time.getDay()) {
                  if (this.arrayOfDatesForAmonth[i].date != "") {
                    this.forAllTheDateOfAttendance(i);
                    if (this.arrayOfDatesForAmonth[i].date > this.currentTime.getDate()) {
                      if(this.typeChoice  != 'Weekly') {
                        document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                      }
                    } else {
                      if (this.arrayOfDatesForAmonth[i].date == time.getDate()) {
                        this.attendanceDates.push(this.arrayOfDatesForAmonth[i].date);
                      } else {
                        if(this.typeChoice != 'Weekly') {
                          document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
                        }
                      }
                    }
                  }
                }
                this.selectedMonthNotCurrentMonth(i);
              }
            }
            this.shadedTheAttendanceOfCurrentUser();
            this.userAttendanceArray.push({
              month: time.getMonth(),
              date: time.getDate(),
              year: time.getFullYear(),
              day: time.getDay(),
            });
          } else {
            if(this.currentMonth > this.selectedMonth){
              this.getTheDatesOfMonthChosen(2, 1);
              // this.shadeUnattended();
            }else {
              if(this.typeChoice != "Weekly") {
                this.getCurrentDate();
                this.firstDayOftheMonthAndLast();
              }
            }
          }
        });
    });
  }

  forAllTheDateOfAttendance(index: number) {
    if (
      !this.dateForAMonthOfAttendance.includes(
        this.arrayOfDatesForAmonth[index].date
      )
    ) {
      this.dateForAMonthOfAttendance.push(
        this.arrayOfDatesForAmonth[index].date
      );
    }
  }
  shadedTheAttendanceOfCurrentUser() {
    if(this.typeChoice != 'Weekly') {
      for (let index = 0; index < this.attendanceDates.length; index++) {
        document.getElementById(
          this.attendanceDates[index].toString()
        ).style.backgroundColor = "rgba(90, 255, 105, 0.7)";
      }
    } 
  }

  shadeUnattended() {
    if(this.typeChoice != 'Weekly') {
      for (let index = 0; index < this.arrayOfDatesForAmonth.length; index++) {
        if(this.arrayOfDatesForAmonth[index].date != "" && this.arrayOfDatesForAmonth[index].day == 0) {
          document.getElementById(this.arrayOfDatesForAmonth[index].date.toString()).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
        }
      }
    }
  }

  selectedMonthNotCurrentMonth(i) {
    if (this.currentMonth < this.selectedMonth) {
      for (let index = 0; index < this.arrayOfDatesForAmonth.length; index++) {
        document.getElementById(
          this.currentTime.getDate().toString()
        ).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        document.getElementById(
          this.arrayOfDatesForAmonth[i].date.toString()
        ).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      }
    } else if (this.currentMonth == this.selectedMonth) {
      this.getCurrentDate();
    }
  }

  getTheDatesOfMonthChosen(year, month) {
    var daysInAmonth;
    var date = new Date(2021, 0);
    for (let index = 0; index < this.getDaysInMonth(date.getMonth(), date.getFullYear()); index++) {
      daysInAmonth = new Date(date.getFullYear(), date.getMonth(), index + 1);
      if(daysInAmonth.getDay() == 0) {
        document.getElementById("" + daysInAmonth.getDate()).style.backgroundColor = "rgba(255, 140, 111, 0.7)";
      }
    }
  }
}
// daysInAmonth = new Date(date.getFullYear(), date.getMonth(), index + 1);
