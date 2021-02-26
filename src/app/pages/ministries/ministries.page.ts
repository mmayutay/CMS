import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { filter } from 'rxjs/operators';
import { User } from '../../model/user.model';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements AfterViewInit  {
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Add'];
  dataSource = new MatTableDataSource<User>();
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content:string;
  public list:any;
  public details;
  public addClicked = false;
 

  constructor(
    
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    ) { }

    ngAfterViewInit () {
      // this.dataSource.paginator = this.paginator;
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log("Params:: ",params);

      this.content = params.content;
      console.log("Ministry: ", this.content);

      this.dataRequest.displayMinistry({ministries: this.content}).subscribe(data => {
        this.storage = data;
        console.log("Ministry: ", this.storage);
      });
    });


    this.dataRequest.ministryList().subscribe(lists => {
      this.list = lists;
      console.log("Ministry List: ", this.list);
    });
  }

  
  btnAdd(){
    this.addClicked = true;
    console.log(this.addClicked);
    
  }

  addMember(member){
    console.log(member)
    this.addClicked = false;
  }

  updateList(ev){
    // this.list.forEach(element => {
    //   console.log(element);
    //   if(element.firstname.includes(ev.target.value) && element.lastname.includes(ev.target.value)) {
    //     this.list.length = 0
    //     this.list.push(element)
    //   }
    // });
    // this.dataRequest.searchMinistryMember({search: ev.target.value}).subscribe(data =>{
    //   console.log(data);  
    // });
    console.log(ev.target.value);
  }
}
