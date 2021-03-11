import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventTraningServiceService {
  public url = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient
  ) { }

  addEventsAndAnnouncements(event) {
    return this.http.post(this.url + 'add-event-announcement', event);
  }
 
  //This function is to show all the events that a certain user added
  retrieveAllAnnouncement() {
    return this.http.get(this.url + 'add-event-announcement/display')
  }
}
