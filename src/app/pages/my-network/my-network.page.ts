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

  constructor(
    private dataRequest: DataRequestsService,
    private request: RequestsService
  ) { }

  ngOnInit() {
    const leader = this.request.getTheCurrentUserIdInStorage()
    leader.then((id: any) => {
      this.getMembersOfNetwork(id)
    })

  }

  // Kini siya nga function kay ang pag kuha sa tanan nga members sa certain leader 
  getMembersOfNetwork(id) {
    const myNetwork = this.dataRequest.getAllMembersOfAGroup(id)
    myNetwork.subscribe((response: any) => {
      this.groupMembers = response
    })
  }


}
