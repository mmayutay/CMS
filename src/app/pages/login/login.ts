import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../services/requests.service'



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login = { email: '', password: '' };
  submitted = false;
  public userAuthenticated = true
  public userLogin;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService
  ) { }

  ngOnInit() {
    this.menu.enable(false)
  } 

  onLogin() {
    this.userAuthenticated = this.request.loginService(this.login)
    console.log(this.userAuthenticated)
    if(this.userAuthenticated) {
      this.router.navigate(['/app/tabs/schedule'])
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
