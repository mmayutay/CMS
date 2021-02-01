import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RequestsService } from '../../logInAndSignupService/requests.service'
import { DataRequestsService } from '../../request-to-BE/data-requests.service'
import { ModalPagePage } from '../modal-page/modal-page.page';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit { 
  public currentUser;
  public username;
  public role = ""
  // username;
  public userDetails = "any";
  public partialData = ""
  public auxliary = "any";
  public ministries = "any";
  public holder=[];


  constructor(
    public alertCtrl: AlertController,
    public modalController: ModalController,
    public router: Router,
    public userData: UserData,
    public request: RequestsService,
    public modal: ModalPagePage,
    public datasRequest: DataRequestsService
  ) { }

  ngAfterViewInit() {
    this.userData.storage.get(this.request.storageUserRole).then(res => {
      this.role = res
    })
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.datasRequest.getTheCurrentUser({userID: res}).subscribe(data => {
        this.holder = data[0]
        console.log('Holder:: ',this.holder)
      })
    })
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }



  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }

  addNewUser() {
    this.router.navigateByUrl('/create-new-user')
  }

  updateInformation() {
    
  }

  optAuxiliary( ) {
    this.router.navigateByUrl('/auxiliary/'+this.auxliary)
  }

  optMinistry(){
    this.router.navigateByUrl('/ministries/'+this.ministries)
    console.log();

  }
}
