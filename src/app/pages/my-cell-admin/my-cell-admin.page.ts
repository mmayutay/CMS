import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service'

@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
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
        console.log(result)
      })
    })
  }


}
