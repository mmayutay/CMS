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
  public userType = ''

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router,
    private request: RequestsService,
    private alertControl: AlertController,
    private activatedRoute: ActivatedRoute,
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.userType = this.activatedRoute.snapshot.paramMap.get('usertype');

    this.menu.enable(false)
  }

  onLogin() {
    this.request.loginService(this.login).subscribe(res => {
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
      if(res[0].roles == this.userType) {
        this.request.storeTheCurrentUserToStorage(currentuser[0].userid, currentuser[0].roles)
        this.dataRequest.getTheCurrentUser({userID: currentuser[0].userid}).subscribe(response => {
          if(response[0].isCGVIP == 1 && response[0].isSCVIP == 1) {
            this.request.userIsVipOrNot(true);
            this.router.navigate(['/reportings'])            
            console.log(true)
          }else{
            this.request.userIsVipOrNot(false);
            this.router.navigate(['/app/tabs/schedule'])
            console.log(false)
          }
        })
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
      message: 'You want to logged as a/an '+this.userType + ' but the user you logged is not a/an ' + this.userType,
      buttons: ['OK']
    });

    await alert.present();
  }
}
