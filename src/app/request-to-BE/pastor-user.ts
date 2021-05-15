import { Injectable } from '@angular/core';
import { EventAndSCAttendance } from 'app/events-and-trainings/event-and-sc-attendance';
import { calendar } from 'app/interfaces/user-options';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Injectable({
  providedIn: 'root'
})

export class PastorUser {
    public activeMembers = []
    public inactiveMembers = []
    public eventsAttendance = []
    public scAttendance = []

  constructor(
    public dataRequest: DataRequestsService,
    public eventsAndSCAttendance: EventAndSCAttendance,
    public calendar: calendar
  ) {
  }

  // Kini siya nga function kay i execute kung ang naka login kay ang pastor 
  returnAttendanceOfAllUsers() {
    const allUsers = this.dataRequest.returnAllUser()
    allUsers.subscribe((users: any) => {
      users.forEach(element => {
        const certainUserAttendance = this.eventsAndSCAttendance.getMemberAttendance(element.id)
        certainUserAttendance.subscribe((response: any) => {
            this.calendar.membersAttendance.currentEventsAttendance = response[0].currentEventsAttendance
            this.calendar.membersAttendance.currentUserAttendance = response[0].currentUserAttendance 
            // response[0].currentUserAttendance.forEach(element => {
            //     this.scAttendance.push(element)

            // });
            // response[0].currentEventsAttendance.forEach(element => {
            //     this.scAttendance.push(element)
            // });
        })
      });
    })
  }

}

// membersAttendance.currentEventsAttendance
// membersAttendance.currentUserAttendance