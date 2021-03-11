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
      Gender: '',
      Address: '',
      Marital_status: '',
      Email: '',
      Contact_number: null,
      Facebook: '',
      Instagram: '',
      Twitter: '',
      Category: '',
      Description:'A new member added!'
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
    this.roleDeclaration();
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
    if(this.role == 'Leader'){
      this.signup.role.code = '4'
    }
    this.request.signUp(this.signup).subscribe(res => {
      this.router.navigate(['/account'])
    })
  }

  declaringTheCurrentRole() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      if (res == "3") {
        this.theNewUserRole = "Member"
      } else if (res == "1") {
        this.theNewUserRole = "Pastor"
      } else if (res == "2") {
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

  getValueOfGender(variable, value) {
    if(variable == 'Marital_status') {
      this.signup.newUser.Marital_status = value.target.value
    }else if(variable == "Gender") {
      this.signup.newUser.Gender = value.target.value
    }else {
      this.signup.role.code = value.target.value
    }
    variable = value
    // this.signup.newUser.Gender = value.target.value
  }
}
