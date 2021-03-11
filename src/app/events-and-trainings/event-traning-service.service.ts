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

  //This function is to retrieve all the events posted by a certain user
  retrieveCertainUserEvent(id) {
    return this.http.get(this.url + "event-owner/" + id)
  }

  //This function is to update the users posted event
  updateEvent(id, updatedData) {
    return this.http.post(this.url + 'add-event-announcement/update/' + id, updatedData)
  }

  //This function return the selected item to edit
  returnTheSelectedEvent(id) {
    return this.http.get(this.url + 'event-return/' + id)
  }

  //This function will delete the selected item by the user
  deleteSelectedEvent(id) {
    return this.http.delete(this.url + 'add-event-announcement/delete/' + id)
  }
}
