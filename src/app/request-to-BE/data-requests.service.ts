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
    console.log(userId);
    
    return this.request.post(this.url + "info", userId);
  }

  // getTheCurrentUserRole(userRole) {
  //   console.log("Nasud nas Get ROLE", userRole)
  //   return this.request.post(this.url + "info", userRole);
  // }
}
