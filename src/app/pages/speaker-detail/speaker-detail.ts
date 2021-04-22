import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { calendar } from '../../interfaces/user-options';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { DataDisplayProvider } from '../../providers/data-editing';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  public listOfStudents = []
  public lessons = []
  public deleteItems = []
  public isToDelete = false
  public classOrTrainingStudents = []
  speaker: any;
  segmentModel = "Trainings";
  public selectedItemId = ''
  public detail = {
    name: '',
    title: '',
    description: ''
  };
  public trainingDetails = {
    title: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private redirect: Router,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    private eventRequest: EventTraningServiceService,
    private datas: calendar,
    private dataRequest: DataRequestsService,
    public dataDisplays: DataDisplayProvider
  ) {}

  ionViewWillEnter() {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      this.selectedItemId = speakerId
      this.segmentModel = this.route.snapshot.paramMap.get('addType');
      this.getClassDetails()
      this.getStudentsOfSelectedClass()
  }

  // This function will add the user 
  getCertainUser(student){
    student.forEach(element => {
    const getUser = this.dataRequest.getStudentsData(element.students_id)
      getUser.subscribe((response) => {
        // this.classOrTrainingStudents.push(response[0])
        this.dataDisplays.studentsOfCertainTraining.push(response[0])
      })
    });
  }
 
  navigateToAddStudent() {
    this.redirect.navigateByUrl('/add-student/' + this.segmentModel + '/' + this.selectedItemId)
  }

  navigateBackToSpeakers() {
    this.listOfStudents.length = 0
    this.redirect.navigateByUrl('/app/tabs/speakers');
  }

  wantToDelete() {
    if(this.isToDelete) {
      this.isToDelete = false
    }else {
      this.isToDelete = true
    }
  }

  getValue(value) {
    if(!this.deleteItems.includes(value)) {
      this.deleteItems.push(value)
    }else {
      this.deleteItems.splice(this.deleteItems.indexOf(value), 1)
    }
  }

  deleteSelectedItems() {
    var arrayOfId = []
    this.deleteItems.forEach(element => {
      arrayOfId.push(element.id)
      this.dataDisplays.studentsOfCertainTraining.splice(this.dataDisplays.studentsOfCertainTraining.indexOf(element), 1)
    })
    const studentsID = this.eventRequest.deleteStudents(this.selectedItemId, arrayOfId)
    studentsID.subscribe((response) => {
      console.log(response)
    })
  }


  // Kini siya nga function kay kuhaon niya details sa selected classes sa trainings 
  getClassDetails() {
    const classDetails = this.eventRequest.returnClassDetails(this.selectedItemId)
    classDetails.subscribe((data: any) => {
      this.detail = data[0]
      const trainingDetails = this.eventRequest.returnTrainingDetails(data[0].training_id)
      trainingDetails.subscribe((response: any) => {
        this.trainingDetails = response[0]
      })
    })
  }

  // Kini siya nga function kay kuhaon niya ang tanan nga mga student anang selected class 
  getStudentsOfSelectedClass() {
    const studentsIDs = this.eventRequest.getStudentOfClass(this.selectedItemId)
    studentsIDs.subscribe((students: any) => {
      students.forEach(element => {
        const usersData = this.dataRequest.getTheCurrentUser({userID: element})
        usersData.subscribe((usersDetails: any) => {
          this.listOfStudents.push(usersDetails[0])
          console.log(usersDetails[0])
        })
      });
    })
  }
}
