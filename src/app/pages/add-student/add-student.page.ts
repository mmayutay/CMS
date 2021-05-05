import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { calendar } from '../../interfaces/user-options';
import { DataDisplayProvider } from '../../providers/data-editing';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  public segmentModel = '';
  public selectedItemId = ''
  public itemSelected = { title: '' };
  public classDetails = { name: '', remarks: '' }

  public foundNames = []
  public ministryMembers = []

  public listOfCurrentStudents = []


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list = [];
  public isAlreadyAttended = []
  public holder: any;
  public addClicked = false;
  public role = "";

  // This is for the new user
  public studentToAdd = {
    lessons_id: '',
    classes_id: '',
    students_id: '',
    type: 'Attendance',
    score: 0,
    over_all: 0,
    remarks: 'Add a note!'
  }

  constructor(
    private dataRequest: DataRequestsService,
    private activatedRoute: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private request: RequestsService,
    private router: Router,
    private datas: calendar,
    private dataDisplay: DataDisplayProvider,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.selectedItemId = this.activatedRoute.snapshot.paramMap.get('selectedItemID');
    this.segmentModel = this.activatedRoute.snapshot.paramMap.get('typeOfAdd');
    // this.returnStudentsOfCurrentClass(this.selectedItemId)
    this.returnCurrentStudents(this.selectedItemId)
    this.returnAllUsers();
    this.getTrainingAndClass()
  }


  getUserRole() {
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.dataRequest.getMyCellgroup({ leaderid: res }).subscribe((data: any) => {
        this.list = data
        console.log(this.list)
      })
    })
  }

  returnAllUsers() {
    var currentUserID = ""
    const currentUser = this.request.getTheCurrentUserIdInStorage()
    currentUser.then((id: any) => { currentUserID = id })

    const allUsers = this.dataRequest.returnAllUser()
    allUsers.subscribe((response: any) => {
      for (let i = 0; i < this.listOfCurrentStudents.length; i++) {
        for (let j = 0; j < response.length; j++) {
          if (currentUserID != response[j].id) {
            if (this.listOfCurrentStudents[i] == response[j].id) {
              this.list.push(response[j])
              this.isAlreadyAttended.push(true)
              response.splice(response.indexOf(response[j]), 1)
            } else {
              if (!this.list.includes(response[j])) {
                this.list.push(response[j])
                this.isAlreadyAttended.push(false)
              }
            }
          }
        }
      }
    })
  }

  iconAdd() {
    this.addClicked = true;
    console.log(this.addClicked);

  }

  addMember(memberId) {
    console.log(memberId.id, this.selectedItemId, this.segmentModel)
    const checkStudent = this.eventRequest.checkStudent(memberId.id, this.selectedItemId)
    checkStudent.subscribe((response: any) => {
      if(response.length == 0) {
        this.studentToAdd.lessons_id = this.segmentModel
        this.studentToAdd.classes_id = this.selectedItemId
        this.studentToAdd.students_id = memberId.id
        const addStudentsRecord = this.eventRequest.addStudentRecord(this.studentToAdd)
        addStudentsRecord.subscribe((response: any) => {
          console.log(response)
        })
      }else {
        const removeStudent = this.eventRequest.removeStudentOfClass(memberId.id, this.segmentModel)
        removeStudent.subscribe((response: any) => {
          console.log(response)
        })
      }
    })
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


  // Re-route back to the selected trainings or class
  backToTrainingOrClass() {
    this.router.navigateByUrl('/app/tabs/speakers/speaker-details/' + this.segmentModel + '/' + this.selectedItemId)
  }

  // Kini siya nga function kay pag update na man ni sa details sa class 
  updateSelectedClass() {
    const updateNow = this.eventRequest.updateClassDetails(this.selectedItemId, this.classDetails)
    updateNow.subscribe((result: any) => {
      this.backToTrainingOrClass()
    })
  }  

  // async loadingAdded(user) {
  //   const loading = await this.loadingController.create({
  //     cssClass: 'my-custom-class',
  //     message: 'Please wait...',
  //     duration: 3000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   this.successfullyAdded(user)
  // }

  // async successfullyAdded(name) {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Successfully Added!',
  //     subHeader: name.firstname + " " + name.lastname,
  //     message: name.firstname + " " + name.lastname + " is successfully added!",
  //     buttons: ['OK']
  //   });

  //   await alert.present();

  //   const { role } = await alert.onDidDismiss();
  //   console.log('onDidDismiss resolved with role', role);
  // }

  // Kini siya kay i return ang students daan sa current selected class 
  returnStudentsOfCurrentClass(classid) {
    const students = this.eventRequest.getStudentOfSelectedClass(classid)
    students.subscribe((response: any) => {
      console.log(response)
    })
  }

  // Kini siya nga function kay kuhaon ang tanan nga students sa selected certain class 
  returnCurrentStudents(classID) {
    const currentStudents = this.eventRequest.getStudentOfClass(classID)
    currentStudents.subscribe((response: any) => {
      this.listOfCurrentStudents = response
    })
  }

  // Kini siya nga function kay maoy responsible sa pag kuha sa name sa training ug sa class 
  getTrainingAndClass() {
    const classDetail = this.eventRequest.returnClassDetails(this.selectedItemId)
    classDetail.subscribe((classDetails: any) => {
      this.classDetails = classDetails[0]
    })
    const getTheTraining = this.eventRequest.returnTrainingDetails(this.segmentModel)
    getTheTraining.subscribe((trainingDetail: any) => {
      this.itemSelected = trainingDetail[0]
      console.log(trainingDetail)
    })
  }
}
