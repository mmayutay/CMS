import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public submitted = false;
  public userAuthenticated = true
  public userLogin;
  public showPass = false;
  public type = 'password';

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService,
    private alertControl: AlertController,
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.dataRequest.storeIfCurrentUserAlreadyAttended(false)

    this.menu.enable(false)
  }

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
 }
 
  onLogin() {
    this.request.loginService(this.login).subscribe(res => {
      console.log(res)
      if(res != null) {
        this.getTheUsersCurrentRole(res[0].roles, res);
      }else{
        this.presentAlert();
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
        this.request.storeTheCurrentUserToStorage(currentuser[0].userid, currentuser[0].roles)
        this.dataRequest.getTheCurrentUser({userID: currentuser[0].userid}).subscribe(response => {
          if(response[0].isCGVIP == 1 && response[0].isSCVIP == 1) {
            this.request.userIsVipOrNot(true);
            this.router.navigate(['/reportings'])
          }else{
            this.request.userIsVipOrNot(false);
            this.router.navigate(['/app/tabs/schedule'])
          }
        })
    })
  }
}
