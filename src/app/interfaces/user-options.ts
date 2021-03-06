import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class calendar {

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
    return (month[monthInput]);
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
    return (month);
  }

  returnTheMonthlyAttendanceForCellgroup() {
    return [20, 30, 70, 50] 
  }
  returnTheMonthlyAttendanceForSC() {
    return [40, 70, 10, 90]
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
    return (days);
  }

  returnAllWeeklyAttendance() {
    return [75, 0, 0, 0, 0, 0, 0]
  }

  returnStatisticsForAYear() {
    return [20, 30, 70, 10, 70, 50, 10, 0, 10, 90, 90, 100]
  }

}