import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

@Component({
  selector: 'app-dashboard-popover',
  templateUrl: './dashboard-popover.page.html',
  styleUrls: ['./dashboard-popover.page.scss'],
})
export class DashboardPopoverPage implements OnInit {
  //This will list all active and inactive members
  public active = []
  public inactive = []
  //This will list all the VIP and Regular members
  public vipMembers = [];
  public regularMembers = [];

  public lengthVIP;
  public lengthReg;

  constructor(private dataRequest: DataRequestsService, ) { }

  ngOnInit() {
    this.getTheVipAndRegularMembers()
  }

  getTheVipAndRegularMembers() {
    var partialDataHandler;
    var regularMembers;
    this.dataRequest.allVipUsers().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.vipMembers.push(element.firstname + " " + element.lastname)

        this.lengthVIP = this.vipMembers.length;
        console.log(this.lengthVIP);

      })
    })
    this.dataRequest.getRegularMembers().subscribe(result => {
      regularMembers = result
      regularMembers.forEach(element => {
        this.regularMembers.push(element.firstname + ' ' + element.lastname)

        this.lengthReg = this.regularMembers.length;
        console.log(this.lengthReg);
      });
    })
  }

}
