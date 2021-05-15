import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../providers/user-data'
// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public storageKey = 'current-logged'
  public storageUserRole = 'user-role'
  public storageKeyUserId = 'user-id'
  public storageKeyVIP = 'is-vip'
  public boolean = true
  public userDataLength;
  public url = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient,
    public userdata: UserData
  ) { }

  loginService(userData) {
    return this.http.post(this.url + 'login', userData)
  }

  logoutService() {
    return this.userdata.storage.clear()
  }

  getCurrentUserInStorage() {
    return this.userdata.storage.get(this.storageKey);
  }

  getTheCurrentUserIdInStorage() {
    return this.userdata.storage.get(this.storageKeyUserId)
  }

  signUp(userInfo) {
    return this.http.post(this.url + 'sign-up', userInfo)
  }

  updateInfo(userDetails) {
    console.log("User Details:: ", userDetails);
    return this.http.post(this.url + 'updateUser', userDetails)
  }

  storeTheCurrentUserToStorage(loggedID, loggedRole) {
    this.userdata.storage.set(this.storageUserRole, loggedRole)
    this.userdata.storage.set(this.storageKeyUserId, loggedID)
  }

  userIsVipOrNot(boolean: Boolean) {
    this.userdata.storage.set(this.storageKeyVIP, boolean);
  }

  getTheUserRoleFromTheStorage() {
    return this.userdata.storage.get(this.storageUserRole)
  }

  getUserIsVipOrNot() {
    return this.userdata.storage.get(this.storageKeyVIP)
  }

  cellGroup() {
    return this.http.get(this.url + 'cellgroup')
  }

  // This route is to get all the leaders 
  getLeaders(role) {
    return this.http.get(this.url + 'get-leaders/' + role)
  }

  sendCodeReset(value) {
    // console.log("Request value: ", value);
    return this.http.get(this.url + 'send-code/' + value)
  }

  verifyCodeReset(codeInput) {
    console.log("Request code input: " + codeInput);
    return this.http.get(this.url + 'verify-code/' + codeInput)
  }

  // resetPass(inputData){
  //   console.log("request:" , inputData);
  //   return this.http.post(this.url + 'reset-password', inputData)

  // }
  sendCodeForgot(value) {
    console.log("Request value: ", value);
    return this.http.get(this.url + 'send-code/' + value)
  }

  resetPass(password) {
    console.log("User Account:: ", password)
    return this.http.post(this.url + 'reset-password', password)
  }
}
