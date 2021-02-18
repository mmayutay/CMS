import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  usersLog: "";
  public type = ''

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.paramMap.get('type')
  }

  usersLogin() {
    this.router.navigateByUrl('/login')
  }

}
