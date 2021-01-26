import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RequestsService} from '../../services/requests.service'

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.page.html',
  styleUrls: ['./ministries.page.scss'],
})
export class MinistriesPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }


  // ministryFunction() {
  //   this.router.navigateByUrl('ministries')
  //   console.log("Ministry");
    
  // }
}
