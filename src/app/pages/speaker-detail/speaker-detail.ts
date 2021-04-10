import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service'
// import { calendar } from 'app/interfaces/user-options';
import { calendar } from '../../interfaces/user-options';
// import { DataRequestsService } from 'app/request-to-BE/data-requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
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
      
      const selectedItem = this.eventRequest.getSelectedTrainingsOrClasses(this.segmentModel, speakerId);
      selectedItem.subscribe((data: any) => {
        this.getTrainingsOrClassLessons(data.id)
        this.detail = data;
        const allStudents = this.eventRequest.getStudent(this.segmentModel, data.id)
        allStudents.subscribe((response: any) => {
          if(response.length != 0) {
            this.dataDisplays.returnStudentsOfCertainTraining(response)
            this.getCertainUser(response)
          }else {
            this.datas.studentsNames.length = 0
          }
        })
    });
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
    this.dataDisplays.studentsOfCertainTraining.length = 0
    this.redirect.navigateByUrl('/app/tabs/speakers');
  }

  wantToDelete() {
    if(this.isToDelete) {
      this.isToDelete = false
    }else {
      this.isToDelete = true
    }
  }

  // Kini siya nga function kay kuhaon ang tanan nga lessons sa selected trainings or class 
  getTrainingsOrClassLessons(id) {
    const getLessons = this.eventRequest.getLessons(id, this.segmentModel)
    getLessons.subscribe((result: any) => {
      this.lessons = result
      console.log(result)
    })
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
}
