import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


// import { MenuController } from '@ionic/angular';

import { filter } from 'rxjs/operators';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

@Component({
  selector: 'pages-auxiliary',
  templateUrl: 'auxiliary.page.html',
  styleUrls: ['./auxiliary.page.scss'],
})
export class AuxiliaryPage implements OnInit {
  public type = '';
  public storage: any;
  content:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public datasRequest: DataRequestsService,
    private alertCtrl: AlertController,

    // public menuController: MenuController
    ) { }

  ngOnInit() {
    // this.menuController.enable(false);

    this.activatedRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log(params);

      this.content = params.content;
      console.log("Auxiliary: ", this.content);

      this.datasRequest.displayAuxiliary({auxi: this.content}).subscribe(data => {
          this.storage = data;
          console.log(data);
          console.log("Sample data: ", this.storage);
        });
    });
    // this.activatedRoute.queryParams.filter(params => params.content)
    // .subscribe(params => {
    //   console.log(params);

    //   this.content = params.content;
    //   console.log("Auxiliary: ", this.content);
    // });
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
