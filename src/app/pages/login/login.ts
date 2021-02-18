import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  public login = { username: '', password: '' };
  submitted = false;
  public userAuthenticated = true
  public userLogin;
  public userLoggedRole;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService,
    private alertControl: AlertController,
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.menu.enable(false)
  }

  onLogin() {
    this.request.loginService(this.login).subscribe(res => {
      if(res[0] != null) {
        this.getTheUsersCurrentRole(res[0].roles, res);
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
  getTheUsersCurrentRole(roleID, currentuser) {
    this.dataRequest.getNetworkWhereIBelong(roleID).subscribe(res => {
      if(res[0].roles == this.dataRequest.roleToLogged) {
        this.request.storeTheCurrentUserToStorage(currentuser[0].userid, currentuser[0].roles)
        this.router.navigate(['/app/tabs/schedule'])
      }else {
        this.wantToLogged();
      }
    })
  }

//This alert will show you when you logged for a certain role but not equal for user you logged
  async wantToLogged() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'You want to logged as a/an '+this.dataRequest.roleToLogged + ' but the user you logged is not a/an ' + this.dataRequest.roleToLogged,
      buttons: ['OK']
    });

    await alert.present();
  }
}
