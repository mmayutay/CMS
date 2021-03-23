import { Injectable } from "@angular/core";
import { DataRequestsService } from "../request-to-BE/data-requests.service";
import { RequestsService } from "../logInAndSignupService/requests.service";

@Injectable({
  providedIn: "root",
})
export class calendar {
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

  returnAllWeeklyAttendance() {
    return [75, 0, 0, 0, 0, 0, 0];
  }

  returnStatisticsForAYear() {
    return [20, 30, 70, 10, 70, 50, 10, 0, 10, 90, 90, 100];
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
    this.dataRequest.allVipUsers().subscribe((data:any) => {
      members.push({type: "VIP Members", length:data.length});
      console.log(members);
    })

    this.dataRequest.getRegularMembers().subscribe((data:any) => {
      members.push({type: "Regular Members", length:data.length});
      console.log(members);
    })

    members.push({type: "Active Members", length: this.activeMember.length });
    members.push({type: "Inactive Members", length: this.inactiveMember.length });
    
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

  
}
