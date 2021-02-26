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

  constructor(
    
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    ) { }

  ngOnInit() {
    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      console.log(params);

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
}
