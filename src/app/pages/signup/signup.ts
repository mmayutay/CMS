import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import * as moment from 'moment';

import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service'




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {

  public birthdate;
  public theNewUserRole = "";
  public role = "";

  signup = {
    newUser: {
      Lastname: '',
      Firstname: '',
      Birthday: '',
      Age: null,
      Address: '',
      Marital_status: '',
      Email: '',
      Contact_number: null,
      Facebook: '',
      Instagram: '',
      Twitter: '',
      Category: '',
      Description:''
    }, groupBelong: {
      Leader: ''
    }, role: {
      code: ''
    }
  };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public request: RequestsService
  ) { }
  ngOnInit() {
    this.declaringTheCurrentRole()
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.signup.groupBelong.Leader = res
    })

    this.userData.storage.get(this.request.storageUserRole).then(res => {
      console.log(' Sign Up ROLE::', res);
      this.role = res
    })
  }


  getTheBirthday(data) {
    this.signup.newUser.Birthday = (<HTMLInputElement>document.getElementById('birth')).value;
    this.CalculateAge();
  }

  CalculateAge() {
    var today = new Date();

    var data = today.getFullYear() + ' ' + today.getMonth() + ' ' + today.getDay();

    this.birthdate = this.signup.newUser.Birthday.split('-');

    if (today.getMonth() > this.birthdate[1]) {
      this.signup.newUser.Age = today.getFullYear() - this.birthdate[0]
    } else {
      this.signup.newUser.Age = today.getFullYear() - this.birthdate[0] - 1
    }

    // this.birthdate = "10/10/1981";
    // if (this.signup.newUser.Birthday) {
    //   var timeDiff = Math.abs(Date.now() - new Date(this.signup.newUser.Birthday).getTime());
    //   this.signup.newUser.Age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    //   console.log(this.signup.newUser.Age)
    // }
    // console.log(Date.now());
  }

  onSignup(form: NgForm) {
    this.signup.role.code = this.theNewUserRole
    this.request.signUp(this.signup).subscribe(res => {
      console.log(res)
      this.router.navigate(['/app/tabs/schedule'])
    })
  }

  declaringTheCurrentRole() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      if (res == "Leader") {
        this.theNewUserRole = "Member"
      } else if (res == "Admin") {
        this.theNewUserRole = "Pastor"
      } else if (res == "Pastor") {
        this.theNewUserRole = "Leader"
      }
    })
  }
}
