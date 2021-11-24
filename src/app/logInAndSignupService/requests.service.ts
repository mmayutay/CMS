import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../providers/user-data'
// import { userInfo } from 'os';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public darkmode = false
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public storageKey = 'current-logged'
  public storageUserRole = 'user-role'
  public storageKeyUserId = 'user-id'
  public storageKeyVIP = 'is-vip'
  public boolean = true
  public userDataLength;
  // public url = "https://group8finalthesis.herokuapp.com/api/"
  public url = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient,
    public userdata: UserData
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginService(userData) {
    return this.http.post(this.url + 'login', userData).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user))
      this.currentUserSubject.next(user)
      return user;
    }))
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  logoutService() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
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

  resetPass(password) {
    console.log("User Account:: ", password)
    return this.http.post(this.url + 'reset-password', password)
  }
}
