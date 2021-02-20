import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {
  public url = "http://localhost:8000/api/"
  public currentUserRole = ''
  public roleToLogged = ""

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

  //the data to pass should be {'newUser': {'leader': 'leaderID', 'member': 'userid', 'type': 'user role', 'date': ''}}
  addAttendance(data) {
    return this.request.post(this.url + 'attendance', data)
  }

  //data to pass is the current user's id
  getTheCurrentUserAttendance(currentUserId, month) {
    return this.request.post(this.url + 'current-user-attendance', {currentUserId: currentUserId, month: month});
  }

  //This is for the admin to get all VIP Users
  allVipUsers () {
    return this.request.get(this.url + 'vip-users')
  }

  //This function fetch all the vip users but this function includes to get the leader 
  getAllVipUsersWithLeader() {
    return this.request.get(this.url + 'vip-user-with-leader')
  }

  //This function is for the notification who displays the leader and the member
  vipUsersToDisplayAsNotification() {
    return this.request.get(this.url + 'all-new-unvip-members');
  }

}
