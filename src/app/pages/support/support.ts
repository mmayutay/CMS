import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestsService } from '../../logInAndSignupService/requests.service';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  public userLeaderAndMember = {
    leader: 'Jericho James Villahermosa',
    members: [
      {id: 1, name: 'Raymond Jay C. Yorong', age: 21, attendance: true},
      {id: 2, name: 'Ma. Lyn Gamboa', age: 20, attendance: false},
      {id: 3, name: 'Marichu Niere', age: 21, attendance: false},
      {id: 4, name: 'Geneva Rivas', age: 22, attendance: true},
      {id: 5, name: 'Jessa Yosores', age: 17, attendance: true},
      {id: 6, name: 'Yubert Mariscal', age: 18, attendance: true},
    ]
  }

  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public request: RequestsService,
  ) { }

  ionViewDidEnter() {
    this.userLeaderAndMember.members.forEach(element => {
      document.getElementById(element.id.toString()).checked = element.attendance;
    });
    // const toast = await this.toastCtrl.create({
      // message: 'This does not actually send a support request.',
    //   duration: 1000
    // });
    // await toast.present();
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }

  cellGroupFunction(){
    this.request.cellGroup();
    // console.log(this.request.cellGroup)
  }
  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  // async ionViewCanLeave(): Promise<boolean> {
  //   // If the support message is empty we should just navigate
  //   if (!this.supportMessage || this.supportMessage.trim().length === 0) {
  //     return true;
  //   }

  //   return new Promise((resolve: any, reject: any) => {
  //     const alert = await this.alertCtrl.create({
  //       title: 'Leave this page?',
  //       message: 'Are you sure you want to leave this page? Your support message will not be submitted.',
  //       buttons: [
  //         { text: 'Stay', handler: reject },
  //         { text: 'Leave', role: 'cancel', handler: resolve }
  //       ]
  //     });

  //     await alert.present();
  //   });
  // }
}
