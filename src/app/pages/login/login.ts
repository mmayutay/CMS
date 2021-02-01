import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../logInAndSignupService/requests.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login = { username: '', password: '' };
  submitted = false;
  public userAuthenticated = true
  public userLogin;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.menu.enable(false)
  }

  onLogin() {
    this.request.loginService(this.login).subscribe(res => {
      if(res[0] != null) {
        this.request.storeTheCurrentUserToStorage(res[0].userid, res[0].roles)
        this.router.navigate(['/app/tabs/schedule'])
      }else {
        this.presentAlert()
      }
    })
  }
  async presentAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Email or password is incorrect.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
