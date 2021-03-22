import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../providers/user-data'


@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {
  public url = "http://localhost:8000/api/"
  public currentUserRole = ''
  public roleToLogged = ""

  constructor(
    private request: HttpClient,
    private userData: UserData
  ) {  }

  //This will get all the users of a certain group
  getAllMembersOfAGroup(leaderID) {
    return this.request.post(this.url + "return-members-group", {leaderID: leaderID})
  }

  //This will store the data if the current user already had his/her attendance
  storeIfCurrentUserAlreadyAttended(boolean) {
    this.userData.storage.set('alreadyAttend', boolean)
  }
  //This will get the data if the current user isn't had his/her attendance yet
  getTheIfCurrentUserIsAttended() {
    return this.userData.storage.get('alreadyAttend')
  }

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
    return this.request.post(this.url + "profile/auxiliary" , auxiliaryValue);
  }

  displayMinistry(ministryValue) {
    return this.request.post( this.url + "profile/ministries" , ministryValue);
  }

  ministryList() {
    return this.request.get( this.url + 'ministries/list');
  }

  addMinistryMember(id, ministry) {
    return this.request.post( this.url + "ministries/add/"+id.id, {ministries: ministry});
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

  //This function will fetch all member users from the database except to the VIP members
  getRegularMembers() {
    return this.request.get(this.url + 'regular-members')
  } 

  //This will let the leader to fetch all the attendance of his/her member
  getMemberSCAndEventsAttendance(currentUserId) {
    return this.request.post(this.url + 'leader-sc-cg', {currentUserId: currentUserId})
  }

  addClassStudent(id, classes) {
    return this.request.post( this.url + "classes/add/"+ id.id, {classes: classes});
  }

  // A function to get the students data
  getStudentsData(id) {
    return this.request.get( this.url + 'student-trainings-or-class/get-student/' + id );
  }

}
