import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../services/requests.service';


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
    private request: RequestsService,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.menu.enable(false)
  } 

  onLogin() {
    this.request.loginService(this.login).subscribe(res => {
      if(res) {
        this.userData.storage.set(this.request.storageKey, this.login.email)
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
