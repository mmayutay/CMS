import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
  public date = new Date();
  public dataAttendanceToPass = {
    newUser: {
      leader: '',
      member: '',
      type: '',
      date: ''
    }
  }
  public currentUserData;
  public newlyApprovedMembers = {
    leader: 'Pangulong Duterte',
    members: [
      {name: 'Raymond Jay'},
      {name: 'Geneva'},
      {name: 'Marichu Niere'},
      {name: 'Ma. Lyn'},
    ]
  }
  public currentUserRole = '';
  public members;

  constructor(
    private request: RequestsService,
    private dataRequest: DataRequestsService,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.showMembersBelongToThisGroup();
    this.getTheCurrentUserRole();
    this.getTheCurrentUser();
  }

  showMembersBelongToThisGroup() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.dataRequest.getNetworkWhereIBelong(res).subscribe(data => {
        this.dataRequest.getMyNetwork(data[0].roles).subscribe(result => {
          this.members = result
        })
      })
    })
  }

  getTheCurrentUserRole(){
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.dataRequest.getNetworkWhereIBelong(res).subscribe(result => {
        this.currentUserData = result
        this.currentUserRole = result[0].roles
      })
    })
  }

  openApprovedMember(divID, divToClose) {
    document.getElementById('data').style.display = 'block'
    document.getElementById(divID).style.width = '250px';
    document.getElementById(divToClose).style.width = '0';
  }
  closeApprovedModal(divID){
    document.getElementById('data').style.display = 'none'
    document.getElementById(divID).style.width = '0'
  }

  getTheCurrentUser() {
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.dataRequest.getTheCurrentUser({userID: res}).subscribe((data) => {
        this.dataAttendanceToPass.newUser.leader = data[0].leader
        this.dataAttendanceToPass.newUser.member = data[0].id
        this.dataAttendanceToPass.newUser.type = this.currentUserData[0].id
        this.dataAttendanceToPass.newUser.date = this.date.toString();
      })
    })
  }

  // {'newUser': {'leader': 'leaderID', 'member': 'userid', 'type': 'user role', 'date': ''}}
  addAttendance() {
    this.dataRequest.addAttendance(this.dataAttendanceToPass).subscribe(data => {
      console.log(data)
      if(data != false){
        this.sundayCelebAttended();
      }else {
        this.unableToAttend();
      }
    })
  }

  async sundayCelebAttended() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Attendance Added!',
      message: "You now attended the Sunday Celebration!",
      buttons: ['OK']
    })

    await alert.present();
  }


  async unableToAttend() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Wrong Day!',
      message: "You can't attend a Sunday Celebration today because today is not Sunday!",
      buttons: ['OK']
    })

    await alert.present();
  }

}
