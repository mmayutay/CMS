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
    public calendar: calendar,
    // public 
  ) {
  }

  // Kini siya nga function kay i execute kung ang naka login kay ang pastor 
  returnAttendanceOfAllUsers() {
    const allUsers = this.dataRequest.returnAllUser()
    allUsers.subscribe((users: any) => {
      users.forEach(element => {
        const certainUserAttendance = this.dataRequest.getMemberSCAndEventsAttendance(element.id)
        certainUserAttendance.subscribe((response: any) => {
            this.calendar.membersAttendance.currentEventsAttendance = response[0].currentEventsAttendance
            this.calendar.membersAttendance.currentUserAttendance = response[0].currentUserAttendance
        })
      });
    })
  }

}

// membersAttendance.currentEventsAttendance
// membersAttendance.currentUserAttendance