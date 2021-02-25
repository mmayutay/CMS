import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  public type = '';
  public addClicked = false;

  constructor(
    // private router: Router,
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.paramMap.get('type')
  }

  btnAdd(){
    this.addClicked = true;
    console.log(this.addClicked);
    
  }
}
