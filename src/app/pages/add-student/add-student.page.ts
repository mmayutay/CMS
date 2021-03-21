import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { calendar } from 'app/interfaces/user-options';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  public segmentModel = '';
  public selectedItemId = ''
  public itemSelected;

  public foundNames = []
  public ministryMembers = []


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list: any;
  public holder: any;
  public addClicked = false;
  public role = "";

  // This is for the new user
  public studentToAdd = {
    trainings: null,
    classes: null,
    students: '',
    type: '',
    score: 0,
    over_all: 0,
    remarks: 'Add a note!',
    level: 'Senior Citizen',
    isAttended: true
  }

  constructor(
    private dataRequest: DataRequestsService,
    private activatedRoute: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private request: RequestsService,
    private router: Router,
    private datas: calendar
    ) { }

  ngOnInit() {
    this.getUserRole();

    this.selectedItemId = this.activatedRoute.snapshot.paramMap.get('selectedItemID');
    this.segmentModel = this.activatedRoute.snapshot.paramMap.get('typeOfAdd');
    this.getTheCertainItemSelected();
  }


  getUserRole() {    
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.dataRequest.getMyCellgroup({leaderid: res}).subscribe(data => {
        this.list = data
        console.log(this.list)
      })
    })
  }

  iconAdd() {
    this.addClicked = true;
    console.log(this.addClicked);

  }

  addMember(memberId) {
    this.datas.studentsNames.push(memberId)
    const addStudent = this.eventRequest
    if(this.segmentModel == "Trainings") {
      this.studentToAdd.trainings =  this.selectedItemId
      this.studentToAdd.students = memberId.id
      this.studentToAdd.type = this.itemSelected.lesson
      addStudent.addStudentToClassOrTrainings(this.studentToAdd).subscribe((data: any) => {
        console.log(data)
      })
    }else {
      this.studentToAdd.classes =  this.selectedItemId
      this.studentToAdd.students = memberId.id
      this.studentToAdd.type = this.itemSelected.lesson
      console.log(this.studentToAdd)
      addStudent.addStudentToClassOrTrainings(this.studentToAdd).subscribe((data: any) => {
        console.log(data)
      })
    }
    // this.dataRequest.getTheCurrentUser({ userID: memberId.id }).subscribe(data => {
    //   this.storage.push(data[0])
    // })

    // this.dataRequest.addClassStudent(memberId, this.content).subscribe(data => {
    //   this.holder = data;
    //   console.log("Add Member: ", this.holder);
    // });

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
      this.itemSelected = data
      console.log(data)
    })
  }

  // Re-route back to the selected trainings or class
  backToTrainingOrClass() {
    this.router.navigateByUrl('/app/tabs/speakers/speaker-details/' + this.segmentModel + '/' + this.selectedItemId)
  }

}
