import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../services/requests.service';


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
    console.log(this.request.loginService(this.login).valueOf());
    
    if (this.request.loginService(this.login).valueOf()) {
      this.userData.storage.set(this.request.storageKey, this.login.username)
      this.router.navigate(['/app/tabs/schedule'])
    } else {
      this.presentAlert()
    }


    // this.request.loginService(this.login).subscribe(res => {
    //   console.log(res)
    //   if(res) {
    //     this.userData.storage.set(this.request.storageKey, this.login.username)
    //     this.userData.storage.set(this.request.storageKeyUserId, res[0].userid)
    //     this.router.navigate(['/app/tabs/schedule'])
    //   }else {
    //     this.presentAlert()
    //   }
    // })
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
