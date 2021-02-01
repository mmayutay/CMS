import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cell-admin',
  templateUrl: './my-cell-admin.page.html',
  styleUrls: ['./my-cell-admin.page.scss'],
})
export class MyCellAdminPage implements OnInit {
  public members = []
  public hierarchyByAdmin = {
    admin: "Ma. Lyn Gamboa",
    leaders: [
      {id: 1, name: "Raymond Yorong"},
      {id: 2, name: "Romeo Lenizo"},
      {id: 3, name: "JJ Villahermosa"},
      {id: 4, name: "Jessa Yosores"},

    ],
    members: [
      {id: 1, name: "Raymond Yorong", leaderId: 2},
      {id: 2, name: "Romeo Lenizo", leaderId: 3},
      {id: 3, name: "JJ Villahermosa", leaderId: 1},
      {id: 4, name: "Jessa Yosores", leaderId: 2},
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  showMembersBelongToThisGroup(leaderID) {
    this.members = []
    this.hierarchyByAdmin.members.forEach(element => {
      if(element.leaderId == leaderID) {
        this.members.push(element)
      }
    });
  }

}
