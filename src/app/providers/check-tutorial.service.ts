import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  public eventCounter = 0
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
    private eventsRequest: EventTraningServiceService
  ) {
    this.getAllTheLeaders();
    const events = this.eventsRequest.retrieveAllAnnouncement()
    events.subscribe((response: any) => {
      this.eventsArray = response
      console.log(this.eventsArray)
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
    const leaders = this.request.getLeaders()
    leaders.subscribe((data: any) => {
      this.leaders = data
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
      const attendance = this.dataRequest.getMemberSCAndEventsAttendance(id)
      attendance.subscribe((response: any) => {
        if (response[0].currentEventsAttendance.length == 0 && response[0].currentUserAttendance.length == 0) {
          data.forEach(element => {
            this.members.push({ user: element, attendance: 0, event: 0 })
          })
        } else {
          for (let j = 0; j < response[0].currentUserAttendance.length; j++) {
            if (new Date(response[0].currentUserAttendance[j].date).getDate() == new Date(this.chosenDate).getDate()) {
              this.members.push({ user: data[j], attendance: 1 })
            } else {
              this.members.push({ user: data[j], attendance: 0 })
            }
          }
        }
        this.attendanceEventsAndSC = response[0]
        console.log(this.attendanceEventsAndSC)
      })
    })
    this.returnLeaderIDBoolean();
    this.typeChoice('Weekly', new Date())
  }

  // This function is to return if there is no leader selected 
  returnLeaderIDBoolean() {
    return this.certainLeadersID != ''
  }

  // Kini siya nga function kay ang display niya kay kung unsa nga petsa ang dominggo until sabado sa selected date
  daysInAweek(current: Date, range: Number) {
    var week = new Array();
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() + 1));
    for (var i = 0; i < range; i++) {
      week.push(
        new Date(current).getMonth() + '-' +
        (new Date(current).getDate() - 1) + '-' +
        new Date(current).getFullYear()
      );
      current.setDate(current.getDate() + 1);
    }
    return week;
  }

  // Kini siya nga function kay like ang gi choose nga display sa reportings kay weekly, monthly or yearly 
  typeChoice(choice: String, chosenDate: Date) {
    this.eventCounter = 0
    if (choice == 'Weekly') {
      console.log(this.eventsArray)
      this.daysInAweek(new Date(this.chosenDate), 7).forEach(date => {
        this.eventsArray.forEach(element => {
          if((new Date(element.start_date).getMonth()  + '-' + new Date(element.start_date).getDate() + '-' + new Date(element.start_date).getFullYear()) ==
            ((new Date(date).getMonth() + 1)  + '-' + new Date(date).getDate() + '-' + new Date(date).getFullYear())) {
              this.eventCounter += 1
          }
        });
      })
    }
  }
}
