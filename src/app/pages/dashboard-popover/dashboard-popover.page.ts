import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { Router } from '@angular/router';
import { calendar } from '../../interfaces/user-options'

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

  public length;
  public lengthReg;

  public typeOfViewMember = this.calendar.returnTypeOfMember()

  constructor(
    private dataRequest: DataRequestsService,
    private router: Router,
    private calendar: calendar,
  ) { }

  ngOnInit() {
    console.log("Type of Members:: ", this.typeOfViewMember);

    this.getTheVipMembers();

    // this.getTheRegularMembers();
  }

  getTheVipMembers() {
    var partialDataHandler;
    this.dataRequest.allVipUsers().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.vipMembers.push(element.firstname + " " + element.lastname)

        this.length = this.vipMembers.length;
        console.log(this.length);

      })
    })
  }
  getTheRegularMembers() {
    var regularMembers;
    this.dataRequest.getRegularMembers().subscribe(result => {
      regularMembers = result
      regularMembers.forEach(element => {
        this.regularMembers.push(element.firstname + ' ' + element.lastname)

        this.length = this.regularMembers.length;
        console.log(this.length);
      });
    })
  }

  lengthMembers(value) {
    this.typeOfViewMember.forEach(element => {
      console.log(element);
      if (element == value) {
        this.getTheVipMembers()
      }
    });
  }

  optMember(value) {
    console.log(value);
    this.router.navigate(['display-members/:type'], { queryParams: { content: value } })
    console.log("Selected Member: ", value);
  }
}
