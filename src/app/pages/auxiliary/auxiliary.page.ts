import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pages-auxiliary',
  templateUrl: 'auxiliary.page.html',
  styleUrls: ['./auxiliary.page.scss'],
})
export class AuxiliaryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  // auxiliaryFunction() {
  //   this.router.navigateByUrl('auxiliary')
  //   console.log("Auxiliary");
    
  // }

}
