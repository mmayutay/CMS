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
  //This function will get the current users attendance through his/her chosed year 
  usersAttendanceChosenYear(monthChose, yearChose, currentUserId) {
    return this.request.post(this.url + 'user-attendance-year-selected', {currentUserId: currentUserId, month: monthChose, year: yearChose})
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

  //Function that get the current user's attendance in both event and sunday celebration
  getEventAndSCAttendance(currentUserId) {
    return this.request.post(this.url + 'viewAttendancesOfSCandEvents', {currentUserId: currentUserId})
  }

  //This function was used to get all the ID of all the only member users inside the collection
  getAllUsersId() {
    return this.request.get(this.url + 'allMemberUsers')
  }

  //This function will add the user to inactive where his/her attendance for sunday celebration is less than 4
  addMemberToInactive(user) {
    return this.request.post(this.url + 'addInactiveUser', {memberId: user.id, active: user.boolean})
  }

}
