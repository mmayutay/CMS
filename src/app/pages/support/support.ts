import { Component } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  public currentUserRole = ''
  public currentUser = [];
  public members;
  public groupMembers = []

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

  cellGroupFunction(){
    this.request.cellGroup();
  }

  getTheCurrentUserRole() {
    
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == "Admin"){
          this.currentUserRole = data[0].roles
          this.datarequest.getAllTheUserRoles().subscribe(data => {
            this.members = data
            this.members.forEach(element => {
              if(element.roles == 'Admin') {
                this.members.pop(element)
                this.currentUser.push(element)
              }else{
                this.groupMembers.push(element)
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
              this.members.forEach(element => {
                if(element.leader == res){
                  this.groupMembers.push(element);
                }
              });
            })
          })
        }
      })
    })
  }
}
