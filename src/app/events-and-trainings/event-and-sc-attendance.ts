import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventAndSCAttendance {
    public url = "http://localhost:8000/api/"

    // viewAttendancesOfSCandEvents
    constructor(
        private http: HttpClient
    ) {}

    getMemberAttendance(memberID) {
        return this.http.post(this.url + "viewAttendancesOfSCandEvents", {currentUserId: memberID})
    }

    // Kini siya nga function kay ang pag kuha sa attendance sa certain user 
    getCertainUserAttendance(userID) {
        return this.http.post(this.url + "get-user-attendance", { currentUserId: userID})
    }

    // Kini siya nga function kay ang pag kuha sa details sa certain event 
    getEventDetails(eventID) {
        return this.http.get(this.url + 'add-attendance/get-event-details/' + eventID)
    }
}