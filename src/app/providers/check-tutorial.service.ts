import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';


@Injectable({
  providedIn: 'root'
})
export class CheckTutorial implements CanLoad {
  public certainLeadersID = ""
  public leaders = []
  public members = []
  public chosenDate = new Date().getMonth() + '/' + new Date().getDate() + '/' + new Date().getFullYear()
  public attendanceEventsAndSC = []

  constructor(
    private storage: Storage,
    private router: Router,
    private request: RequestsService,
    private dataRequest: DataRequestsService,
  ) {
    this.getAllTheLeaders()
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
  dateRender(value) {
    if(this.certainLeadersID != "") {
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
      })
    })
    this.returnLeaderIDBoolean()
  }

  // This function is to return if there is no leader selected 
  returnLeaderIDBoolean() {
    return this.certainLeadersID != ''
  }
}
