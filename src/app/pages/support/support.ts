import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  public currentUser = [];
  public members;

  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public request: RequestsService,
    private datarequest: DataRequestsService
  ) { }

  ionViewDidEnter() {
    this.getTheCurrentUserRole();
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
  }

  getTheCurrentUserRole() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == "Admin"){
          this.datarequest.getAllTheUserRoles().subscribe(data => {
            this.members = data
            this.members.forEach(element => {
              if(element.roles == 'Admin') {
                this.members.pop(element)
                this.currentUser.push(element)
              }
            });
          })
        }else{
          this.request.getTheCurrentUserIdInStorage().then(res => {
            this.datarequest.getTheCurrentUser({userID: res}).subscribe((data) => {
              this.currentUser.push(data[0])
            })
            this.datarequest.getMyCellgroup({leaderid: res}).subscribe((data) => {
              this.members = data
            })
          })
        }
      })
    })
  }
}
