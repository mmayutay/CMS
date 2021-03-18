import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { filter } from 'rxjs/operators';

import { AfterViewInit, ViewChild } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements AfterViewInit {
  public foundNames = []
  public ministryMembers = []


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list: any;
  public holder: any;
  public details;
  public addClicked = false;
  isItemAvailable = false;
  public role = "";


  constructor(
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    private request: RequestsService,
  ) { }

  ngAfterViewInit() {

    this.getUserRole();

    this.type = this.activeRoute.snapshot.paramMap.get('type')
    // console.log(this.type);
    this.getAllMinistryMembers(this.type);

    // this.dataSource.paginator = this.paginator;
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {

      this.content = params.content;
      console.log("Ministry: ", this.content);
      this.getAllMinistryMembers(this.content);

      this.dataRequest.displayMinistry({ ministries: this.content }).subscribe(data => {
        this.storage = data;
        console.log("Ministry: ", this.storage);
      });
    });

    this.dataRequest.ministryList().subscribe(lists => {
      this.list = lists;
      // for (let index = 0; index < this.list.length; index++) {
      //   this.ministryMembers.push({ name: this.list[index].firstname + "-" + this.list[index].lastname, id: this.list[index].id })
      // }
      this.list.forEach((element, index) => {
        console.log(this.list[index]);
        if (element.ministries == this.content) {
          this.list.splice(index, 1);
        }
        this.ministryMembers.push({ name: this.list[index].firstname + "-" + this.list[index].lastname, id: this.list[index].id })
      })
    });



    // if (this.list[index].ministries === this.content) {
    //   this.list.splice(this.list[index]);
    //   console.log(this.list[index]);
    // }
  }

  getAllMinistryMembers(ministry) {
    console.log(ministry)
    this.dataRequest.displayMinistry({ ministries: ministry }).subscribe(data => {
      console.log(data)
      this.storage = data
    })
  }

  iconAdd() {
    console.log("dfdfdfdfd");
    
    this.addClicked = true;
    console.log(this.addClicked);
  }

  addMember(memberId) {    
    this.dataRequest.getTheCurrentUser({ userID: memberId.id }).subscribe(data => {
      this.storage.push(data[0])
    })

    this.dataRequest.addMinistryMember(memberId, this.content).subscribe(data => {
      this.holder = data;
      console.log("Add Member: ", this.holder);
    });
    this.addClicked = false;
  }

  updateList(event: any) {
    this.list = []
    this.foundNames.length = 0
    var val = event.target.value.toLowerCase();
    for (let index = 0; index < this.ministryMembers.length; index++) {
      if (this.ministryMembers[index].name.toLowerCase().includes(val)) {
        this.foundNames.push(this.ministryMembers[index])
      }
    }
    this.foundNames.forEach(element => {
      this.list.push({ id: element.id, firstname: element.name.split("-")[0], lastname: element.name.split("-")[1] })
    });
  }

  getUserRole() {
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.dataRequest.getNetworkWhereIBelong(res).subscribe(data => {
        console.log(data[0].roles)
        this.role = data[0].roles
      })
    })
  }
}
