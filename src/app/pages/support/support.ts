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
  public currentUserId = ''
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
    this.request.getTheCurrentUserIdInStorage
  }

  cellGroupFunction(){
    this.request.cellGroup();
  }

  ifCurrentUserIsMember(){
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == 'Member'){
          this.currentUserRole = data[0].roles
          this.request.getTheCurrentUserIdInStorage().then(result => {
            this.currentUserId = result
            this.datarequest.getTheCurrentUser({userID: result}).subscribe(response => {
              this.datarequest.getTheCurrentUser({userID: response[0].leader}).subscribe(leaderData => {
                this.currentUser.push(leaderData[0])
                this.getAllMembers();
              })
            })
          })
        }
      })
    })
  }

  getTheCurrentUserRole() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == 'Member') {
          this.ifCurrentUserIsMember();
        }else if(data[0].roles == "Admin"){
          this.currentUserRole = data[0].roles
          this.datarequest.getAllTheUserRoles().subscribe(result => {
            this.members = result
            console.log(this.members)
            this.members.forEach(element => {
              if(element.roles == 'Admin'){
                this.members.slice(this.members.indexOf(element), 1)
                this.currentUser.push(element)
              }else{
                this.groupMembers.push(element)
              }
            });
          });
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

  // this function is intended is the current user is also a member, so that this function will retrieve all the
  //members of the group where the current user belong
  getAllMembers() {
    this.datarequest.getMyCellgroup({leaderid: this.currentUser[0].id}).subscribe(data => {
      this.members = data
      this.members.forEach(element => {
        this.groupMembers.push(element)
      });
    })
  }
}
