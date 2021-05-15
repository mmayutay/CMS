import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { filter } from 'rxjs/operators';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.page.html',
  styleUrls: ['./display-members.page.scss'],
})
export class DisplayMembersPage implements OnInit {

  public content = "";
  public listAllTheMembers;
  public active = []
  public inactive = []
  public currentTime = new Date();

  constructor(
    private activeRoute: ActivatedRoute,
    private dataRequest: DataRequestsService,
    private request: RequestsService
  ) { }

  ngOnInit() {

    this.activeRoute.queryParams.pipe(
      filter((params => params.content))
    ).subscribe(params => {
      this.content = params.content;
      console.log("Member Content:: ", this.content);
      this.returnActiveMembers()

      if (this.content == "VIP Members") {
        this.listAllTheMembers = this.getTheVipMembers()
      } else if (this.content == "Regular Members") {
        this.listAllTheMembers = this.getTheRegularMembers()
      }
    })
  }

  userIsActiveOrNot() {
    var partialDataHandler;
    this.dataRequest.getAllUsersId().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.dataRequest.getEventAndSCAttendance(element).subscribe(data => {
          this.classifyActiveAndInactive(element, data[0].currentUserAttendance);
        })
      })
    })
  }

  classifyActiveAndInactive(owner, users) {
    var counter = 0
    var dateToApproved = [];
    var toJudgeDate;
    var newDate;
    toJudgeDate = new Date(2021, this.currentTime.getMonth(), 0)
    for (let index = 0; index < 30; index++) {
      newDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth() - 1, index + 1)
      if (newDate.getDay() == 0) {
        dateToApproved.push(newDate)
      }
    }
    users.forEach(i => {
      dateToApproved.forEach(j => {
        if (new Date(i.date).getDate() == j.getDate()) {
          counter += 1
        }
      })
    })
    if (counter < 4 && counter > 0) {
      dateToApproved.length = 0
      for (let index = 0; index < this.currentTime.getDate(); index++) {
        newDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), index + 1)
        if (newDate.getDay() == 0) {
          dateToApproved.push(newDate)
        }
      }
      users.forEach(i => {
        dateToApproved.forEach(j => {
          if (new Date(i.date).getDate() == j.getDate()) {
            counter += 1
          }
        })
      })
    }
    // if (counter >= 4) {
    //   this.dataRequest.addMemberToInactive({ id: owner, boolean: true }).subscribe(result => {
    //     this.dataRequest.getTheCurrentUser({ userID: result[0].userId }).subscribe(data => {
    //       this.active.push(data[0].firstname + " " + data[0].lastname)
    //     })
    //   })
    // } else {
    //   this.dataRequest.addMemberToInactive({ id: owner, boolean: false }).subscribe(result => {
    //     this.dataRequest.getTheCurrentUser({ userID: result[0].userId }).subscribe(data => {
    //       this.inactive.push(data[0].firstname + " " + data[0].lastname)
    //     })
    //   })
    // }
  }

  counter(i: number) {
    return new Array(i);
  }
  
  //This function will return all VIP Members
  getTheVipMembers() {
    this.dataRequest.allVipUsers().subscribe(data => {
      this.listAllTheMembers = data
    })
  }
  //This function will return all Regular Members 
  getTheRegularMembers() {
    let userRole = 0
    const currentUserRole = this.request.getTheUserRoleFromTheStorage()
    currentUserRole.then(role => {userRole = Number(role) / 12})
    var arrayRegularMembers = []
    var regularMembers;
    this.dataRequest.getRegularMembers(userRole).subscribe(result => {
      regularMembers = result
      regularMembers.forEach(element => {
        arrayRegularMembers.push(element)
      });
    })
    return arrayRegularMembers;
  }

  // Kini siya nga functino kay i return ang active members 
  returnActiveMembers() {
    if(this.content == 'Active Members') {
      const activeMembers = this.dataRequest.returnActiveAndInactiveUsers('true')
      activeMembers.subscribe((response: any) => {
        this.listAllTheMembers = response
      })
    }else if(this.content == 'Inactive Members') {
      const inactiveMembers = this.dataRequest.returnActiveAndInactiveUsers('false')
      inactiveMembers.subscribe((response: any) => {
        this.listAllTheMembers = response
      }) 
    }else if(this.content == 'VIP Members') {
      this.getTheVipMembers()
    }else {
      this.listAllTheMembers = this.getTheRegularMembers()
    }
  }
}


