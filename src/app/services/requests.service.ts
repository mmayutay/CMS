import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../providers/user-data'

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
    return this.http.post(this.url + 'login', userData)
  }
  logoutService() {
    return this.userdata.storage.clear()
  }

  getCurrentUserInStorage() {
    return this.userdata.storage.get(this.storageKey);
  }

  signUp(userInfo){
    return this.http.post(this.url + 'sign-up', userInfo)
  }
}
// $user->age = $request->input('Age');
// $user->leader = $request->input('Leader');
// $user->member_status = $request->input('Member_status');
// $user->email = $request->input('Email');
// $user->name = $request->input('Name');
// $user->password = $request->input('Password');


//[ {id: 1, name: 'rj', email: 'rj@gmail.com' }]
