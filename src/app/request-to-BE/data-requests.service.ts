import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {
  public url = "http://localhost:8000/api/"
  public currentUserRole = ''

  constructor(
    private request: HttpClient
  ) {  }

  getTheCurrentUser(userId) {
    return this.request.post(this.url + "info", userId);
  }

  getMyCellgroup(leaderId){
    return this.request.post(this.url + 'leader', leaderId)
  }

  getNetworkWhereIBelong(roleID) {
    return this.request.post(this.url + 'currentUserRole', {id: roleID})
  }

  getMyNetwork(myRole){
    return this.request.post(this.url + 'network', {role: myRole})
  }

  //for Admin request
  getAllTheUserRoles() {
    return this.request.get(this.url + 'getAllUserRoles')
  }

}
