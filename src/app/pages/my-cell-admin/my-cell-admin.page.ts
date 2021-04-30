import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
  segmentModel = "NewApprovedMembers";
  public role = ""

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
  public vipUsers;
  public newlyApprovedMembers;
  public currentUserRole = '';
  public notificationsContent;
  public members;
  public paginationCount = 5
  public count = 0
  public classes;
  pageOfItems: Array<any>;

  constructor(
    private request: RequestsService,
    private dataRequest: DataRequestsService,
    private alertControl: AlertController
  ) { }

  ngOnInit() {
    this.showMembersBelongToThisGroup();  
    this.getVIPMembers();
  }

  onChangePage(pageOfItems: Array<any>, type) {
    // update current page of items
    if(type == 'add') {
      if(this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount += 5
        this.count += 5
      }
    }else {
      if((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount -= 5
        this.count -= 5
      }
    }
    this.pageOfItems = pageOfItems;
    console.log("DFDFD: ", this.pageOfItems)
  }

  showMembersBelongToThisGroup() {
    const role = this.request.getTheUserRoleFromTheStorage()
    role.then((userRole: any) => {
      this.role = this.roleConverter(userRole)
    })
    console.log(this.role)
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.dataRequest.returnCellgroupTheSameRole(res).subscribe(data => {
          this.members = data
      })
      this.dataRequest.returnCellgroupTheSameRole(res).subscribe(result => {
        this.currentUserData = result
        this.currentUserRole = result[0].roles
        this.getTheCurrentUser();
      })
    })
  }

  // Kini siya nga function kay i convert ang role sa current user 
  roleConverter(role) {
    var roles = new Array();
    roles[0] = "Admin"
    roles[1] = "Pastor"
    roles[12] = "Leader"
    roles[144] = "Member(144)"
    roles[1728] = "Member(1728)"
    return roles[Number(role)]
  }

  openApprovedMember(divID, divToClose) {
    document.getElementById('data').style.display = 'block'
    document.getElementById(divID).style.width = '250px';
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


  //Get all the new added members or all the VIP
  getVIPMembers() {
    this.dataRequest.allVipUsers().subscribe(vipData => {
      this.vipUsers = vipData
    })
    this.getVipMembersWithLeader();
    this.notifVipAndLeader();
  }

  //Get all the new members or VIP but this function is also the leader return
  getVipMembersWithLeader() {
    this.dataRequest.getAllVipUsersWithLeader().subscribe(returnData => {
      this.notificationsContent = returnData
    })
  }

  //Get the notifications in which it contains the name of the VIP and also the name of his/her leader
  notifVipAndLeader() {
    this.dataRequest.vipUsersToDisplayAsNotification().subscribe(dataFetched => {
      this.newlyApprovedMembers = dataFetched
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
  // createCode() {
  //   this.createdCode = this.qrData
  // } 

}