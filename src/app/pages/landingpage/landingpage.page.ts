import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

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
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService
  ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.paramMap.get('type')
  }

  usersLogin() {
    this.dataRequest.roleToLogged = this.usersLog
    this.router.navigateByUrl('/login')
  }

}
