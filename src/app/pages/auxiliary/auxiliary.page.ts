import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pages-auxiliary',
  templateUrl: 'auxiliary.page.html',
  styleUrls: ['./auxiliary.page.scss'],
})
export class AuxiliaryPage implements OnInit {
  public type = '';

  constructor(
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
  }


}
