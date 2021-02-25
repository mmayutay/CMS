import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  public type = '';
  public storage: any;
  content:string;

  constructor(
    // private router: Router,
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    private alertCtrl: AlertController,
    ) { }

  ngOnInit() {
    // this.type = this.activeRoute.snapshot.paramMap.get('type')
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log(params);

      this.content = params.content;
      console.log("Ministry: ", this.content);

      this.dataRequest.displayMinistry({ministries: this.content}).subscribe(data => {
        this.storage = data;
        console.log(data);
        console.log("Ministry: ", this.storage);
      });
    });
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
