import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../logInAndSignupService/requests.service';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  public theNewUserRole = ""
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
    }, groupBelong: {
      Leader: ''
    }, role: {
      code: 'Member'
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
      if(res == "Leader") {
        this.theNewUserRole = "Member"
      }else if(res == "Admin") {
        this.theNewUserRole = "Pastor"
      }else if(res == "Pastor") {
        this.theNewUserRole = "Leader"
      }
    })
  }
}
