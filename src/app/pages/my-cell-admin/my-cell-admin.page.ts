import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service'

@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
  public members;
  public hierarchyByAdmin = {
    admin: "Ma. Lyn Gamboa",
    leaders: [
      {id: 1, name: "Raymond Yorong", age: 20, status: 'Single'},
      {id: 2, name: "Romeo Lenizo", age: 20, status: 'Single'},
      {id: 3, name: "JJ Villahermosa", age: 19, status: 'Single'},
      {id: 4, name: "Jessa Yosores", age: 14, status: 'Single'},

    ],
    members: [
      {id: 1, name: "Lebron James", leaderId: 2},
      {id: 2, name: "Dwayne Wade", leaderId: 3},
      {id: 3, name: "Kyle Kuzma", leaderId: 1},
      {id: 4, name: "Michael Jordan", leaderId: 2},
    ]
  }

  constructor(
    private request: RequestsService,
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.showMembersBelongToThisGroup()

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
}
