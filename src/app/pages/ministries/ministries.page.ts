import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { filter } from 'rxjs/operators';
import { User } from '../../model/user.model';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RequestsService } from '../../logInAndSignupService/requests.service';


@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements AfterViewInit {
  public foundNames = []
  public ministryMembers = []
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Adddress', 'Email', 'Contact No.', 'Leader'];
  dataSource = new MatTableDataSource<User>();

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list: any;
  public holder:any;
  public details;
  public addClicked = false;
  isItemAvailable = false;


  constructor(

    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    public request: RequestsService,
  ) { }

  ngAfterViewInit() {
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {

      this.content = params.content;

      this.dataRequest.displayMinistry({ ministries: this.content }).subscribe(data => {
        this.storage = data;
        this.dataSource = new MatTableDataSource<User>(this.storage);
        console.log("Ministry: ", this.storage);
      });
    });

    this.dataRequest.ministryList().subscribe(lists => {
      this.list = lists;
      // for (let index = 0; index < this.list.length; index++) {
      //   this.ministryMembers.push({ name: this.list[index].firstname + "-" + this.list[index].lastname, id: this.list[index].id })
      // }
      this.list.forEach((element, index) => {
        if (element.ministries == this.content) {
          this.list.splice(index, 1);
          // console.log(this.list);
        }
        this.ministryMembers.push({ name: this.list[index].firstname + "-" + this.list[index].lastname, id: this.list[index].id })
      })
    });
    // if (this.list[index].ministries === this.content) {
    //   this.list.splice(this.list[index]);
    //   console.log(this.list[index]);
    // }
  }


  iconAdd() {
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
}
