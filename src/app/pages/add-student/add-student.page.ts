import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { ActivatedRoute } from '@angular/router';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  public segmentModel = '';
  public selectedItemId = ''

  public foundNames = []
  public ministryMembers = []


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list: any;
  public holder: any;
  public details;
  public addClicked = false;
  isItemAvailable = false;
  public role = "";



  constructor(
    private dataRequest: DataRequestsService,
    private activatedRoute: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private request: RequestsService
    ) { }

  ngOnInit() {
    console.log(this.getUserRole());
     

    this.selectedItemId = this.activatedRoute.snapshot.paramMap.get('selectedItemID');
    this.segmentModel = this.activatedRoute.snapshot.paramMap.get('typeOfAdd');
    this.getTheCertainItemSelected();
  }


  getUserRole() {    
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.dataRequest.getNetworkWhereIBelong(res).subscribe(data => {
        console.log(data[0].roles)
        this.role = data[0].roles
      })
    })
  }

  iconAdd() {
    this.addClicked = true;
    console.log(this.addClicked);

  }

  addMember(memberId) {
    console.log("Scam")
    this.dataRequest.getTheCurrentUser({ userID: memberId.id }).subscribe(data => {
      this.storage.push(data[0])
    })

    this.dataRequest.addClassStudent(memberId, this.content).subscribe(data => {
      this.holder = data;
      console.log("Add Member: ", this.holder);
    });


    this.addClicked = false;
  }

  updateList(event: any) {
    this.list = []
    this.foundNames.length = 0
    var val = event.target.value.toLowerCase();
    for (let index = 0; index < this.ministryMembers.length; index++) {
      if (this.ministryMembers[index].name.toLowerCase().includes(val)) {
        this.foundNames.push(this.ministryMembers[index])
      }
    }
    this.foundNames.forEach(element => {
      this.list.push({ id: element.id, firstname: element.name.split("-")[0], lastname: element.name.split("-")[1] })
    });
  }


  // This function is to get the value of a selected item in class or in trainings
  getTheCertainItemSelected() {
    console.log(this.selectedItemId + ' ' + this.segmentModel)
    const selectedItem = this.eventRequest.getSelectedTrainingsOrClasses(this.segmentModel, this.selectedItemId)
    selectedItem.subscribe((data: any) => {
      console.log(data)
    })
  }

}
