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
  public userInfo: User = {
    Name: '',
    Age: null,
    Leader: '',
    Member_status: '',
    Email: '',
    Password: '',
  };

  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public request: RequestsService,
    public router: Router,
    public userData: UserData,
    public menu: MenuController 
  ) {}
  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.request.signUp(this.userInfo).subscribe(res => {
      this.router.navigate(['/app/tabs/schedule'])
    });
  }
}
