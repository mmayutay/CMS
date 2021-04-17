import { Component, OnInit } from '@angular/core';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
// import { calendar } from 'app/interfaces/user-options';
import { calendar } from '../../interfaces/user-options';
// import { DataDisplayProvider } from 'app/providers/data-editing';
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
  public itemSelected;

  public foundNames = []
  public ministryMembers = []


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  public type = '';
  public storage: any;
  content: string;
  public list = [];
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
    this.returnAllUsers()
    // this.getUserRole();

    this.selectedItemId = this.activatedRoute.snapshot.paramMap.get('selectedItemID');
    this.segmentModel = this.activatedRoute.snapshot.paramMap.get('typeOfAdd');
  }


  getUserRole() {    
    this.request.getTheCurrentUserIdInStorage().then(res => {
      this.dataRequest.getMyCellgroup({leaderid: res}).subscribe((data: any) => {
        this.list = data
        console.log(this.list)
      })
    })
  }

  returnAllUsers() {
    const allUsers = this.dataRequest.returnAllUser()
    allUsers.subscribe((response: any) => {
      response.forEach(element => {
        const currentUser = this.request.getTheCurrentUserIdInStorage()
        currentUser.then((id: any) => {
          if(id != element.id) {
            this.list.push(element)
          }
        })
      })
    })
  }

  iconAdd() {
    this.addClicked = true;
    console.log(this.addClicked);

  }

  addMember(memberId) {
    this.studentToAdd.lessons_id = this.selectedItemId
    this.studentToAdd.classes_id = this.segmentModel
    this.studentToAdd.students_id = memberId.id
    this.loadingAdded(memberId)
    const addStudentsRecord = this.eventRequest.addStudentsRecord(this.studentToAdd)
    addStudentsRecord.subscribe((response: any) => {
      console.log(response)
      this.router.navigate(['/app/tabs/speakers'])
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
    this.router.navigateByUrl('/app/tabs/speakers')
  }

  async loadingAdded(user) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.successfullyAdded(user)
  }

  async successfullyAdded(name) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Successfully Added!',
      subHeader: name.firstname + " " + name.lastname,
      message: name.firstname + " " + name.lastname + " is successfully added!",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
