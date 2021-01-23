import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../providers/user-data';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public storageKey = 'current-logged'
  public boolean = true
  public userDataLength;
  public url = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient,
    public userdata: UserData
  ) { }

  loginService(userData){
    this.http.post(this.url + 'login', userData).subscribe(res => {
      this.userDataLength = res
      if(this.userDataLength.length != 0) {
        this.userdata.storage.set(this.storageKey, this.userDataLength[0].email)
        this.boolean = true
      }else {
        this.boolean = false
      }
    })
    return this.boolean
  }
  logoutService() {
    return this.userdata.storage.clear()
  }

  getCurrentUserInStorage() {
    return this.userdata.storage.get(this.storageKey);
  }

  signUp(userInfo : User){
    return this.http.post(this.url + 'sign-up', userInfo)
  }

}
