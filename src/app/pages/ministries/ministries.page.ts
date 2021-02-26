import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  public type = '';
  public storage: any;
  content:string;
  public addClicked = false;
  public allMemberUsers = [
    {fname: 'Raymond', lname: 'Yorong'},
    {fname: 'Romeo', lname: 'Lenizo'},
    {fname: 'Yubert', lname: 'Mariscal'},
  ]

  constructor(
    
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    ) { }

  ngOnInit() {
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log("Params:: ",params);

      this.content = params.content;
      console.log("Ministry: ", this.content);

      this.dataRequest.displayMinistry({ministries: this.content}).subscribe(data => {
        this.storage = data;
        console.log(data);
        console.log("Ministry: ", this.storage);
      });
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
    this.allMemberUsers.forEach(element => {
      if(element.fname.includes(ev.target.value) && element.lname.includes(ev.target.value)) {
        this.allMemberUsers.length = 0
        this.allMemberUsers.push(element)
      }
    });
    // this.dataRequest.searchMinistryMember({search: ev.target.value}).subscribe(data =>{
    //   console.log(data);  
    // });
    console.log(ev.target.value);
  }
}
