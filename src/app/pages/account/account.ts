import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RequestsService } from '../../logInAndSignupService/requests.service'
import { DataRequestsService } from '../../request-to-BE/data-requests.service'

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  public currentUser;
  public username = "any";
  public partialData = ""
  public auxiliary = ["Blessed Kids", "Blessed Youth", "Blessed Singles", "Blessed Married Men", "Blessed Married Women"];


  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public request: RequestsService,
    public datasRequest: DataRequestsService
  ) { }

  ngAfterViewInit() {
    // this.getUsername();
    this.request.getTheCurrentUserIdInStorage().then(res => {
      console.log(res)
      this.datasRequest.getTheCurrentUser({userID: res}).subscribe(data => {
        console.log(data)
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
}
