import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {
  public url = "http://localhost:8000/api/"

  constructor(
    private request: HttpClient
  ) { }

  getTheCurrentUser(userId) {
    return this.request.post(this.url + "info", userId);
  }

  editUserInfo(userId) {
    return this.request.get(this.url + "info/edit", userId);
  }

  updateUserInfo(userId) {
    return this.request.post(this.url + "info/update", userId);
  }

  displayAuxiliary(auxiliaryValue) {
    console.log(auxiliaryValue);
    return this.request.post(this.url + "profile/auxiliary" , auxiliaryValue);
  }
}
