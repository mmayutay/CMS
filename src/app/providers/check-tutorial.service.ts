import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EventAndSCAttendance } from '../events-and-trainings/event-and-sc-attendance';
import { EventTraningServiceService } from '../events-and-trainings/event-traning-service.service';
import { calendar } from '../interfaces/user-options';
import { RequestsService } from '../logInAndSignupService/requests.service';
import { DataRequestsService } from '../request-to-BE/data-requests.service';



@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  public range = 7
  public choice = "Weekly"
  public eventCounter = 0
  public sundayCounter = 0
  public certainLeadersID = ""
  public leaders = []
  public members = []
  public chosenDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '-'
  public attendanceEventsAndSC = []
  public eventsArray = []

  constructor(
    private storage: Storage,
    private router: Router,
    private request: RequestsService,
    private dataRequest: DataRequestsService,
    private eventsRequest: EventTraningServiceService,
    private eventAttendance: EventAndSCAttendance,
    private calendar: calendar
  ) {
    // this.typeChoice(this.choice, new Date())
    this.getAllTheLeaders();
    const events = this.eventsRequest.retrieveAllAnnouncement()
    events.subscribe((response: any) => {
      this.eventsArray = response
    })
  }






  canLoad() {
    return this.storage.get('ion_did_tutorial').then(res => {
      if (res) {
        this.router.navigate(['/app', 'tabs', 'schedule']);
        return false;
      } else {
        return true;
      }
    });
  }






  // This function will get all the leaders
  getAllTheLeaders() {
    const currentUserRole = this.request.getTheUserRoleFromTheStorage()
    currentUserRole.then(role => {
      const leaders = this.request.getLeaders(role)
      leaders.subscribe((data: any) => {
        this.leaders = data
      })
    })
  }






  // This function will be triggered only if their is already a selected leader
  dateRender() {
    if (this.certainLeadersID != "") {
      this.getMembersOfCertainLeader(this.certainLeadersID)
    }
  }






  // This function is to get all the members of a certain leader
  getMembersOfCertainLeader(id) {
    this.members.length = 0
    this.certainLeadersID = id
    const members = this.dataRequest.getMyCellgroup({ leaderid: id })
    members.subscribe((data: any) => {
      console.log(data)
      const attendance = this.dataRequest.getMemberSCAndEventsAttendance(id)
      attendance.subscribe((response: any) => {
        if (response[0].currentEventsAttendance.length == 0 && response[0].currentUserAttendance.length == 0) {
          data.forEach(element => {
            this.members.push({ user: element, attendance: 0, event: 0 })
          })
        } else {
          data.forEach(element => {
            this.getSundayAttendance(element)
          })
        }
        this.attendanceEventsAndSC = response[0]
      })
    })
    this.returnLeaderIDBoolean();
  }






  // This function is to return if there is no leader selected 
  returnLeaderIDBoolean() {
    return this.certainLeadersID != ''
  }






  // Kini siya nga function kay kuhaon ang attendance sa usa ka member kung naa ba siyay attendance anang certain event or sunday celebration 
  getSundayAttendance(memberId: any) {
    let eventAttendanceCounter = 0
    let SCAttendanceCounter = 0
    const attendance = this.eventAttendance.getMemberAttendance(memberId.id)
    attendance.subscribe((response: any) => {
      // Kini siya diri nga part kay optional, kung ang member kay way attendance current event, musulod siya ari  
      if (response[0].currentEventsAttendance.length != 0) {
        response[0].currentUserAttendance.forEach(sundayAttendance => {
          this.daysInAweek(new Date(this.chosenDate), this.range).forEach((date: any) => {
            if (new Date(date).getDay() == 0) {
              if (new Date(date).getDate() == new Date(sundayAttendance.date).getDate()) {
                SCAttendanceCounter += 1
              }
            }
          })
        })
        // This area is for the attendance in sunday 
        response[0].currentEventsAttendance.forEach(eventsAttendance => {
          this.daysInAweek(new Date(this.chosenDate), this.range).forEach(date => {
            if (new Date(eventsAttendance.date).getMonth() + "-" + new Date(eventsAttendance.date).getDate() + "-" + new Date(eventsAttendance.date).getFullYear() ==
              new Date(date).getMonth() + "-" + new Date(date).getDate() + "-" + new Date().getFullYear()) {
              eventAttendanceCounter += 1
            }
          })
        })
      }
      this.members.push({ user: memberId, attendance: SCAttendanceCounter, event: eventAttendanceCounter })
      eventAttendanceCounter = 0
      SCAttendanceCounter = 0
    })
  }






  // Kini siya nga function kay ang display niya kay kung unsa nga petsa ang dominggo until sabado sa selected date
  daysInAweek(current: Date, range: Number) {
    var week = new Array();
    // Starting Monday not Sunday
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






  getDaysArray(start, end) {
    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  }


  // Kini siya nga function kay iyang i render ang attendance sa certain member sa anang selected nga month 
  returnCertainStudentAttendance(monthAndYear: any) {
    this.sundayCounter = 0
    var array = this.calendar.getDaysInMonth(new Date(monthAndYear).getMonth(), new Date(monthAndYear).getFullYear())
    array.forEach(element => {
      if(new Date(element).getDay() == 0) {
        this.sundayCounter += 1
      }
    })
  }



  // Kini siya nga function kay like ang gi choose nga display sa reportings kay weekly, monthly or yearly 
  typeChoice(choice) {
    this.choice = choice
    if (this.choice == 'Weekly') {
      this.eventCounter = 1
    } else if (this.choice == 'Monthly') {
      this.eventCounter = 4
    } else if (this.choice == 'Quarterly') {
      this.eventCounter = 12
    } else {
      this.eventCounter = 52
    }
    this.members.length = 0
  }

  // typeChoice(choice, chosenDate) {
  //   this.sundayCounter = 0
  //   this.choice = choice
  //   this.eventCounter = 0
  //   if (choice == 'Weekly') {
  //     this.range = 7
  //     this.daysInAweek(new Date(this.chosenDate), 7).forEach(date => {
  //       if (new Date(date).getDay() == 0) {
  //         this.sundayCounter += 1
  //       }
  //       this.eventsArray.forEach(element => {
  //         if ((new Date(element.start_date).getMonth() + '-' + new Date(element.start_date).getDate() + '-' + new Date(element.start_date).getFullYear()) ==
  //           ((new Date(date).getMonth()) + '-' + new Date(date).getDate() + '-' + new Date(date).getFullYear())) {
  //           this.eventCounter += 1
  //         }
  //       })
  //     })
  //   } else if (choice == 'Monthly') {
  //     this.range = 31
  //     const dates = this.calendar.getDaysInMonth(new Date(this.chosenDate).getMonth(), new Date(this.chosenDate).getFullYear())
  //     dates.forEach(date => {
  //       if (new Date(date).getDay() == 0) {
  //         this.sundayCounter += 1
  //       }
  //       this.eventsArray.forEach(element => {
  //         if ((new Date(element.start_date).getMonth() + '-' + new Date(element.start_date).getDate() + '-' + new Date(element.start_date).getFullYear()) ==
  //           ((new Date(date).getMonth()) + '-' + new Date(date).getDate() + '-' + new Date(date).getFullYear())) {
  //           this.eventCounter += 1
  //         }
  //       })
  //     })
  //   } else if (choice == "Yearly") {
  //     this.range = this.getDaysArray(new Date(new Date().getFullYear(), 0, 1), new Date(new Date().getFullYear(), 11, 31)).length
  //     var daylist = this.getDaysArray(new Date(new Date(this.chosenDate).getFullYear(), 0, 1), new Date(new Date(this.chosenDate).getFullYear(), 11, 31));
  //     daylist.map((v) => v.toISOString().slice(0, 10)).join("")
  //     daylist.forEach(date => {
  //       if (new Date(date).getDay() == 0) {
  //         this.sundayCounter += 1
  //       }
  //       this.eventsArray.forEach(element => {
  //         if ((new Date(element.start_date).getMonth() + '-' + new Date(element.start_date).getDate() + '-' + new Date(element.start_date).getFullYear()) ==
  //           ((new Date(date).getMonth() + 1) + '-' + new Date(date).getDate() + '-' + new Date(date).getFullYear())) {
  //           this.eventCounter += 1
  //         }
  //       })
  //     })
  //   }
  //   this.dateRender()
  // }
}
