import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { RequestsService } from '../../services/requests.service'

import { User } from '../../model/user.model';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: User = {
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
    }
  };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public menu: MenuController,
    public request: RequestsService
  ) { }
  ngOnInit() {
    this.menu.enable(false)
  }

  onSignup(form: NgForm) {
    this.request.signUp(this.signup).subscribe(res => {
      console.log(res)
      this.router.navigate(['/app/tabs/schedule'])
    })


    // public userInfo: User = {
    //   Name: '',
    //   Age: null,
    //   Leader: '',
    //   Member_status: '',
    //   Email: '',
    //   Password: '',
    // };

    // signup: UserOptions = { username: '', password: '' };
    // submitted = false;

    // constructor(
    //   public request: RequestsService,
    //   public router: Router,
    //   public userData: UserData,
    //   public menu: MenuController 
    // ) {}
    // ngOnInit() {
    // }

    // onSignup(form: NgForm) {
    //   this.request.signUp(this.userInfo).subscribe(res => {
    //     this.router.navigate(['/app/tabs/schedule'])
    //   });
  }
}
