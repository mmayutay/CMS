import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';

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
    public request: RequestsService,
    public dataRequest: DataRequestsService
  ) { }
  ngOnInit() {
    this.declaringTheCurrentRole()
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.signup.groupBelong.Leader = res
    })
    this.roleDeclaration()
  }


  getTheBirthday(data) {
    this.signup.newUser.Birthday = (<HTMLInputElement>document.getElementById('birth')).value;
    this.CalculateAge();
  }

  CalculateAge() {
    var today = new Date();

    this.birthdate = this.signup.newUser.Birthday.split('-');

    if (today.getMonth() > this.birthdate[1]) {
      this.signup.newUser.Age = today.getFullYear() - this.birthdate[0]
    } else {
      this.signup.newUser.Age = today.getFullYear() - this.birthdate[0] - 1
    }
  }

  onSignup(form: NgForm) {
    this.signup.role.code = this.theNewUserRole
    this.request.signUp(this.signup).subscribe(res => {
      console.log(res)
      this.router.navigate(['/account'])
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
  roleDeclaration() {
    this.request.getTheUserRoleFromTheStorage().then(result => {
      this.dataRequest.getNetworkWhereIBelong(result).subscribe(data => {
        this.role = data[0].roles
      })
    })
  }
}
