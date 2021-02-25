import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  public type = ''

  constructor(
    // private router: Router,
    private activeRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.paramMap.get('type')
  }

  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Add Member:',
      message: `<ion-icon name="search"></ion-icon> Search User`,
      inputs: [
        { 
          name: 'addedMember',
          placeholder: 'Search here...',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ]
    });
    await alert.present();
  }
}
