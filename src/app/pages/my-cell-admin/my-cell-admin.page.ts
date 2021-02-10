import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service'

@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
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
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.showMembersBelongToThisGroup();
    this.getTheCurrentUserRole();
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
        this.currentUserRole = result[0].roles
      })
    })
  }

  openApprovedMember(divID) {
    document.getElementById('data').style.display = 'block'
    document.getElementById(divID).style.width = '250px';
  }
  closeApprovedModal(divID){
    document.getElementById('data').style.display = 'none'
    document.getElementById(divID).style.width = '0'
  }

  addAttendance() {
    console.log('Added')
  }

}
