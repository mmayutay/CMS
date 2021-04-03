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

}