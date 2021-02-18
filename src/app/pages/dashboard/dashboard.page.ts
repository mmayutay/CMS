import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service'
import { RequestsService } from '../../logInAndSignupService/requests.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
//array of users attendance
  public userAttendanceArray = []
//for the calendar
  public numberOfDaysInAWeek = []
  public arrayOfDatesForAmonth = []
  public lengthOfMonthsDate = []
  public dayToday = "";
  public calendarMonth = "";
//for the selected month
  public selectedMonth = 0;
  public currentMonth = 0;

  constructor(
    private datarequest: DataRequestsService,
    private request: RequestsService
  ) { }

  ngOnInit() {
    this.getCurrentMonth();
    this.getAllDateFromUser();
    this.firstDayOftheMonthAndLast();
  }

  // checkTheDayToday(dayToday) {
  //   var weekday = new Array(7);
  //   weekday[0] = "Sunday";
  //   weekday[1] = "Monday";
  //   weekday[2] = "Tuesday";
  //   weekday[3] = "Wednesday";
  //   weekday[4] = "Thursday";
  //   weekday[5] = "Friday";
  //   weekday[6] = "Saturday";
  //   this.dayToday = weekday[dayToday];
  // }

  convertMonth(monthInput) {
    this.selectedMonth = monthInput
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    this.calendarMonth = month[monthInput];
  }

  getCurrentDate() {
    var date = new Date();
    var dateId = date.getDate().toString();
    document.getElementById(dateId).style.backgroundColor = "rgb(210, 210, 210, 0.7)";  
  }


  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();;
  }

  getCurrentMonth() {
    var date = new Date();
    this.currentMonth = date.getMonth();
  }

  firstDayOftheMonthAndLast() {
    var daysInAmonth;
    var counter = 0
    var date = new Date(2021, 1);
    for (let index = 0; index < 36; index++) {
      if(this.arrayOfDatesForAmonth.length < this.getDaysInMonth(1, 2021)) {
        daysInAmonth = new Date(date.getFullYear(), date.getMonth(), index+1);
        this.arrayOfDatesForAmonth.push({date: daysInAmonth.getDate(), day: daysInAmonth.getDay()})
      }else {
        this.arrayOfDatesForAmonth.push({date: "", day: this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day + 1})
      }
    }
    this.convertMonth(date.getMonth())
    for (let index = 0; index < 45; index++) {
      if(this.numberOfDaysInAWeek.length != 7) {
        this.numberOfDaysInAWeek.push(counter)
      }else {
        this.lengthOfMonthsDate.push(this.numberOfDaysInAWeek)
        this.numberOfDaysInAWeek = []
        this.numberOfDaysInAWeek.push(counter)
      }
      counter += 1;
    }

    for (let index = 0; index < 45; index++) {
      if(this.arrayOfDatesForAmonth[0].day != 0) {
        this.arrayOfDatesForAmonth.unshift({date: '', day: this.arrayOfDatesForAmonth[0].day - 1})
      }else if(this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day != 6) {
        this.arrayOfDatesForAmonth.push({date: '', day: this.arrayOfDatesForAmonth[this.arrayOfDatesForAmonth.length - 1].day + 1})
      }
    }
  }

  counter(i: number) {
    return new Array(i);
  }


  getAllDateFromUser() {
    var currentTime = new Date();
    var partialDataHandler;
    var time;
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.datarequest.getTheCurrentUserAttendance(res).subscribe((data) => {
        partialDataHandler = data
        this.getCurrentDate();
        for (let i = 0; i < this.arrayOfDatesForAmonth.length; i++) {
          for (let j = 0; j < partialDataHandler.length; j++) {
            time = new Date(partialDataHandler[j]);
            if(this.arrayOfDatesForAmonth[i].day == time.getDay()) {
              if(this.arrayOfDatesForAmonth[i].date != "") {
                if(this.arrayOfDatesForAmonth[i].date > currentTime.getDate()) {
                  this.getCurrentDate();
                  document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                }else {
                  if(this.arrayOfDatesForAmonth[i].date == time.getDate()) {
                    document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor  = "rgba(90, 255, 105, 0.7)"
                  }else {
                    document.getElementById(this.arrayOfDatesForAmonth[i].date).style.backgroundColor = "rgba(255, 140, 111, 0.7)"
                  }
                }
              }
          }
          if(this.currentMonth != this.selectedMonth) {
            document.getElementById("" + currentTime.getDate()).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            if(this.currentMonth < this.selectedMonth) {
              if(this.arrayOfDatesForAmonth[i].date !=  "") {
                if(this.arrayOfDatesForAmonth[i].day == 0) {
                  console.log(this.arrayOfDatesForAmonth[i])
                  document.getElementById(this.arrayOfDatesForAmonth[i].date.toString()).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }
              }
            }
          } 
          }
        }
        this.userAttendanceArray.push({month: time.getMonth(), date: time.getDate(), year: time.getFullYear(), day: time.getDay()})
      })
    });
  }
}