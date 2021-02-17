import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public numberOfDaysInAWeek = []
  public arrayOfDatesForAmonth = []
  public lengthOfMonthsDate = []
  public dayToday = "";
  public calendarMonth = "";

  constructor() { }

  ngOnInit() {
    var dateObj = new Date();
    this.checkTheDayToday(dateObj.getDay());
    this.firstDayOftheMonthAndLast();
  }

  checkTheDayToday(dayToday) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.dayToday = weekday[dayToday];
  }

  convertMonth(monthInput) {
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



  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();;
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
    // console.log(this.arrayOfDatesForAmonth);
    // console.log(this.lengthOfMonthsDate);
  }

  counter(i: number) {
    return new Array(i);
  }

}