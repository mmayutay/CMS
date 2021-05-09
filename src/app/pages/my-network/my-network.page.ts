import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.page.html',
  styleUrls: ['./my-network.page.scss'],
})
export class MyNetworkPage implements OnInit {
  public groupMembers = []
  public leaderDetails = []

  constructor(
    private dataRequest: DataRequestsService,
    private request: RequestsService
  ) { }

  ngOnInit() {
    const leader = this.request.getTheCurrentUserIdInStorage()
    leader.then((id: any) => {
      this.getUserDetails(id)
      const userAccount = this.dataRequest.getCurrentUserAccount(id)
      userAccount.subscribe((data: any) => {
        console.log(data)
        if(data.roles == 12 || data.roles == 1) {
          this.getMembersOfNetwork(id)
        }else {
          this.getMembersOfNetwork(this.leaderDetails[0].leader)
        }
      })
    })

  }

  // Kini siya nga function kay ang pag kuha sa tanan nga members sa certain leader 
  getMembersOfNetwork(id) {
    const myNetwork = this.dataRequest.getAllMembersOfAGroup(id)
    myNetwork.subscribe((response: any) => {
      this.groupMembers = response
    })
  }

  // Kini siya nga function kay i return ang details sa current user 
  getUserDetails(userID) {
    const userDetails = this.dataRequest.getTheCurrentUser({userID: userID})
    userDetails.subscribe((response: any) => {
      console.log(response)
      this.leaderDetails = response
    })
  }


}
