import { Injectable } from "@angular/core";
import { DataRequestsService } from "../request-to-BE/data-requests.service";
import { RequestsService } from "../logInAndSignupService/requests.service";

@Injectable({
  providedIn: "root",
})
export class calendar {
  public membersAttendance;
  public membersOfAGroup;
  public statsAttendance = [];
  public activeMember = [];
  public inactiveMember = [];
  public studentsNames = [];


  constructor(
    private dataRequest: DataRequestsService,
    private request: RequestsService
  ) {
    this.calculateStats();
    this.getDateOfAWholeYear(2021)
  }

  convertMonth(monthInput) {
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
    return month[monthInput];
  }

  returnAllMonthsChoices() {
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
    return month;
  }

  returnTheMonthlyAttendanceForCellgroup() {
    return [20, 30, 70, 50];
  }
  returnTheMonthlyAttendanceForSC() {
    // return this.calculateStats;
    return [40, 70, 10, 90];
  }

  returnAllDays() {
    var days = new Array();
    days[0] = "Sun";
    days[1] = "Mon";
    days[2] = "Tue";
    days[3] = "Wed";
    days[4] = "Thu";
    days[5] = "Fri";
    days[6] = "Sat";
    return days;
  }
  returnAllWeeks() {
    var weeks = new Array();
    weeks[0] = "1st";
    weeks[1] = "2nd";
    weeks[2] = "3rd";
    weeks[3] = "4th";
    return weeks;
  }

  // Kini siya nga function kay iyang i return ang array sa percentage nga basihan sa statistics 
  getMonthlyStats(dataAttendance: any, month: string, year: number) {
    var allAverage = 0
    var arrayPercent = []
    arrayPercent.length = 0
    for (let count = 0; count < 5; count++) {
      this.getWeekOfMonth(dataAttendance, count, month + " " + year).forEach(data => {
        allAverage += data
      })
      arrayPercent.push((allAverage / this.membersOfAGroup.length))
      allAverage = 0
    }
    return arrayPercent;
  }

  // Kini siya nga function kay iyang i return ang array sa percentage sa quarterly 
  getQuarterlyStats(dataAttendance: any, monthsOfQuarter: any, year: number) {
    var arrayPercentPerMonth = []
    var sumMonthsStats = 0
    monthsOfQuarter.forEach(element => {
      this.getMonthlyStats(dataAttendance, element, year).forEach((response: any) => {
        sumMonthsStats += response
      })
      arrayPercentPerMonth.push((sumMonthsStats / this.membersOfAGroup.length))
      sumMonthsStats = 0
    })
    return arrayPercentPerMonth;
  }

  // Kini siya nga function kay i return ang statistics sa whole year 
  returnStatisticsForAYear(dataAttendance: any, year: number) {
    var arrayOfStats = []
    for (let index = 0; index < 12; index++) {
      var month = this.getMonthlyStats(dataAttendance, this.convertMonth(index), year)
      var toBeAdded = month.reduce((a, b) => {
        return a + b
      })
      arrayOfStats.push(toBeAdded)
    }
    console.log(arrayOfStats)
    return arrayOfStats;
  }

  // Kini siya nga function kay iyang i return ang date sa whole year
  getDateOfAWholeYear(givenYear: any) {
    let listDate = []
    let startDate = givenYear + "-01-01"
    let endDate = givenYear + "-12-31"
    let dateMove = new Date(startDate)
    let strDate = startDate

    while (strDate < endDate) {
      strDate = dateMove.toISOString().slice(0, 10)
      listDate.push(new Date(strDate))
      dateMove.setDate(dateMove.getDate() + 1)
    }
    return listDate;
  }

  returnYearsFrom2005ToCurrentYear() {
    var startYear = 2019 - 10;
    var currentYear = new Date().getFullYear();
    var years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  }

  returnTypeOfMember() {
    var members = [];
    this.dataRequest.allVipUsers().subscribe((data: any) => {
      members.push({ type: "VIP Members", length: data.length });
    })

    this.dataRequest.getRegularMembers().subscribe((data: any) => {
      members.push({ type: "Regular Members", length: data.length });
    })

    members.push({ type: "Active Members", length: this.activeMember.length });
    members.push({ type: "Inactive Members", length: this.inactiveMember.length });

    return members;
  }

  calculateStats() {
    this.request.getTheCurrentUserIdInStorage().then((id) => {
      this.dataRequest.getAllMembersOfAGroup(id).subscribe((response) => {
        this.membersOfAGroup = response;
      });
    });
  }

  weekOfAMonth(date) {
    var attendanceCounter = 0;
    var arrayOfDates = [];
    var weeklyAttendance = [];
    var time = new Date();
    for (let index = 0; index < 7; index++) {
      arrayOfDates.push(
        new Date(time.getFullYear(), time.getMonth(), index + 7).getDate()
      );
    }
    for (let j = 0; j < arrayOfDates.length; j++) {
      for (let index = 0; index < date.length; index++) {
        if (new Date(date[index].date).getDate() == arrayOfDates[j]) {
          attendanceCounter += 1;
        }
      }
      weeklyAttendance.push(
        Math.floor((attendanceCounter / this.membersOfAGroup.length) * 100)
      );
      attendanceCounter = 0;
    }
    return weeklyAttendance;

  }

  // Kini siya nga function kay i return ang tanan nga attendance sa iyang mga members 
  returnAttendance(data) {
    this.membersAttendance = data[0]
  }

  // get the week of the month
  getWeekOfMonth(arrayOfDates: any, week: number, monthAndYear: string) {
    var arrayOfPercent = []
    var eventCounter = 0
    this.returnWeek(monthAndYear, week).forEach(event => {
      arrayOfDates.forEach(element => {
        if ((new Date(event).getMonth() + '-' + new Date(event).getDate() + '-' + new Date(event).getFullYear())
          ==
          (new Date(element.date).getMonth() + '-' + new Date(element.date).getDate() + '-' + new Date(element.date).getFullYear())) {
          eventCounter += 1
        }
      })
      arrayOfPercent.push((eventCounter / this.membersOfAGroup.length) * 100)
      eventCounter = 0
    })
    return arrayOfPercent;
  }

  // Kini siya nga function kay iyang i return kung ika pila nga week sa month ang given nga date 
  returnWeek(date, chosenWeek) {
    var arrayOfSelectedMonth = []
    var firstDate = new Date(new Date(date).getFullYear(), new Date(date).getMonth(), 1).getDay();
    this.getDaysInMonth(new Date(date).getMonth(), new Date(date).getFullYear()).forEach(element => {
      if (chosenWeek == Math.ceil((new Date(element).getDate() + firstDate) / 7)) {
        arrayOfSelectedMonth.push(element)
      }
    })
    return arrayOfSelectedMonth
  }

  monthlyData(date) {
    var attendanceCounter = 0;
    var arrayOfDates = [];
    var monthlyAttendance = [];
    var time = new Date();
    for (let index = 0; index < 31; index++) {
      arrayOfDates.push(
        new Date(time.getFullYear(), time.getMonth(), index + 31).getDate()
      );
    }
    for (let j = 0; j < arrayOfDates.length; j++) {
      for (let index = 0; index < date.length; index++) {
        if (new Date(date[index].date).getDate() == arrayOfDates[j]) {
          attendanceCounter += 1;
        }
      }
      monthlyAttendance.push(
        Math.floor((attendanceCounter / this.membersOfAGroup.length) * 100)
      );
      attendanceCounter = 0;
    }
    console.log("dfdfd: ", monthlyAttendance);
    return monthlyAttendance;

  }

  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


  dates(current) {
    var week = new Array();
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() + 1));
    for (var i = 0; i < 7; i++) {
      week.push(
        new Date(current)
      );
      current.setDate(current.getDate() + 1);
    }
    return week;
  }


  returnAllDateOfYear(start, end) {
    // var start = new Date("2015/01/15");
    // var end = new Date("2016/12/15");

    while (start <= end) {
      console.log(new Date(start));
      start.setMonth(start.getMonth() + 1);
    }
  }

  allDatesOfYear(current: Date, range: Number) {
    var week = new Array();
    current.setDate((current.getDate() - current.getDay() + 1));
    for (var i = 0; i < range; i++) {
      week.push(
        (new Date(current).getMonth() + 1) + '-' +
        (new Date(current).getDate() - 1) + '-' +
        new Date(current).getFullYear()
      );
      current.setDate(current.getDate() + 1);
    }
    return week;
  }

  // Kini siya nga function kay i return ang tanan nga date sa whole year 
  returnDatesOfWholeYear(startdate, enddate) {
    const listDate = [];
    // const startDate = '2017-02-01';
    // const endDate = '2017-02-10';
    const dateMove = new Date(startdate);
    let strDate = startdate;

    while (strDate < enddate) {
      strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    };
    return listDate;
  }
}
