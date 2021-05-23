import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
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
  public submitted = false;
  public userAuthenticated = true
  public userLogin;
  public type = 'password';
  public showPass = false;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService,
    private alertControl: AlertController,
    private dataRequest: DataRequestsService,
    private loadingController: LoadingController
  ) {
    if (this.request.currentUserValue) {
      this.router.navigate(['/app/tabs/schedule'])
    }
  }

  ngOnInit() {
    this.dataRequest.storeIfCurrentUserAlreadyAttended(false)

    this.menu.enable(false)

    this.request.getTheCurrentUserIdInStorage().then((data: any) => {
      if (data != null) {
        this.router.navigate(['/app/tabs/schedule'])
      }
    })
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  onLogin() {
    this.presentLoading()
    this.request.loginService(this.login).subscribe((res: any) => {
      console.log(res)
      if (res != null) {
        if (res.length != 0) {
          this.getTheUsersCurrentRole(res[0].roles, res);
        } else {
          this.presentAlert()
        }
      } else {
        this.presentAlert();
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Username or password is incorrect.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async forgotPassword() {
    const alert = await this.alertControl.create({
      header: "Notice",
      message: "Contact Admin for Forgot Password",
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  onForgotPassword() {
    this.forgotPassword();
  }

  getTheUsersCurrentRole(roleID, currentuser) {
    this.dataRequest.getNetworkWhereIBelong(roleID).subscribe(res => {
      this.request.storeTheCurrentUserToStorage(currentuser[0].userid, currentuser[0].roles)
      this.dataRequest.getTheCurrentUser({ userID: currentuser[0].userid }).subscribe(response => {
        if (response[0].isCGVIP == 1 && response[0].isSCVIP == 1) {
          this.request.userIsVipOrNot(true);
          this.router.navigate(['/reportings'])
        } else {
          this.request.userIsVipOrNot(false);
          this.router.navigate(['/app/tabs/schedule'])
        }
      })
    })
  }
}
