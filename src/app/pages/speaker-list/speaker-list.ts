import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { SpeakerFilterPage } from '../speaker-filter/speaker-filter.page';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  public defaultTraining = ''
  public defaultLesson = ''
  public defaultClass = ''

  public selectedTrainingID;
  public selectedClass;
  public selectedLesson;
  public studentsClassesScores = []

  public paginationCount = 5
  public count = 0
  public classes;
  public trainings;
  public classesOfSelectedTraining;
  segmentModel = "Trainings";
  pageOfItems: Array<any>;

  constructor(
    public confData: ConferenceData,
    private eventsService: EventTraningServiceService,
    private request: RequestsService,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private dataDisplays: DataDisplayProvider,
    private dataRequest: DataRequestsService,
    private router: Router,
    private alertController: AlertController
  ) { }


  onChangePage(pageOfItems: Array<any>, type) {
    // update current page of items
    if (type == 'add') {
      if (this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
        this.paginationCount += 5
        this.count += 5
      }
    } else {
      if ((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
        this.paginationCount -= 5
        this.count -= 5
      }
    }
    this.pageOfItems = pageOfItems;
    console.log("DFDFD: ", this.pageOfItems)
  }

  ionViewDidEnter() {
    this.displayDefaultTraining()
  }


  // Kini siya nga function kay mag return ug default nga trainings 
  displayDefaultTraining() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      const trainings = this.eventsService.getTrainings(id)
      trainings.subscribe((data: any) => {
        console.log("Training Data:: ",data);
        this.defaultTraining = data[0].title
        this.selectedTrainingID = data[0].id
        this.returnAllLessons(data[0].id)
        this.returnClassesOfTraining(data[0].id)
      })
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  segmentModels(value) {
    this.segmentModel = value.target.value;
    this.classesOfSelectedTraining = undefined
    this.dataDisplays.lessonsAdded = undefined
    this.dataDisplays.allStudentsOfSelectedClass = undefined
    this.displayDefaultTraining()
    this.returnStudentsOfSelectedLessonAndClasses()
  }


  // This function is for adding the a training or a classes 
  addEventOrClass() {
    if (this.segmentModel == 'Trainings') {
      this.router.navigate(['/add-training'])
    } else {
      this.router.navigate(['/add-classes'])
    }
  }

  // Kini siya function kay ang pag add ug lesson sa certain trainings 
  navigateAddLesson() {
    this.router.navigate(['/add-lesson/' + this.selectedTrainingID])
  }

  // Kini siya nga function kay kuhaon niya ang ID sa selected training 
  getIDSelectedTraining(value) {
    this.selectedTrainingID = value.target.value
    this.returnAllLessons(value.target.value)
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: SpeakerFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      // componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    // if (data) {
    //   this.excludeTracks = data;
    // }
  }


  navigateToAddingScore(id, type) {
    this.router.navigate(['/add-student-score/' + id + "/" + type])
  }

  navigateAddClassOfLesson() {
    this.router.navigate(['/add-classes'])
  }

  // Kini siya nga function kay iyang i return ang tanan nga lessons sa selected trainings 
  returnAllLessons(trainingID) {
    this.returnClassesOfTraining(trainingID)
    const lessons = this.eventsService.returnLessons(trainingID)
    lessons.subscribe((data: any) => {
      this.dataDisplays.lessonsAdded = data
      if(data.length != 0) {
        this.defaultLesson = data[0].title
        this.selectedLesson = data[0].id
      }
    })
  }

  // Kini siya nga function kay i return ang selected lesson
  returnSelectedLesson(lessonID) {
    this.selectedLesson = lessonID.target.value
  }

  // Kini siya nga function kay iyang i return ang selected class 
  returnSelectedClass(classID) {
    this.selectedClass = classID.target.value
    this.returnStudentsOfSelectedLessonAndClasses()
  }

  // Kini siya nga function kay i return ang classes sa certain lessons sa selected trainings 
  returnClassesOfTraining(trainingID) {
    const classes = this.eventsService.returnClassesOfTraining(trainingID)
    classes.subscribe((data: any) => {
      this.classesOfSelectedTraining = data
      if(data.length != 0) {
        this.defaultClass = data[0].name
        this.selectedClass = data[0].id
      }
    })
  }

  // Kini siya nga function kay ang pag add ug student sa certain training 
  addStudent() {
    if (this.selectedTrainingID == undefined || this.selectedClass == undefined) {
      this.presentAlert()
    } else {
      this.router.navigate(['/add-student/' + this.selectedTrainingID + '/' + this.selectedClass])
    }
  }

  // Kini siya nga function kay iyang i return ang mga student sa ana nga selected lesson 
  returnStudentsOfSelectedLessonAndClasses() {
    const allStudents = this.eventsService.getStudentOfClass(this.selectedClass)
    allStudents.subscribe((data: any) => {
      this.dataDisplays.allStudentsOfSelectedClass = []
      data.forEach(element => {
        const user = this.dataRequest.getTheCurrentUser({ userID: element })
        user.subscribe((response: any) => {
          this.dataDisplays.allStudentsOfSelectedClass.push(response[0])
        })
      })
    })

    const students = this.eventsService.getStudentOfSelectedClass(this.selectedClass)
    students.subscribe((data: any) => {
      this.dataDisplays.studentsScores = data
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Unable to Add!',
      message: 'No training and Class selected!',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Kini siya nga function kay pag delete ug lesson sa certain training 
  async deleteLesson(lessonID) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Lesson?',
      message: 'Are you sure you want to delete this lesson?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            const deleteLesson = this.eventsService.deleteLessonOfTraining(lessonID.id)
            deleteLesson.subscribe((response: any ) => {
              this.dataDisplays.lessonsAdded.splice(this.dataDisplays.lessonsAdded.indexOf(lessonID), 1)
              this.successfullyDeleted()
            })
          }
        }
      ]
    });

    await alert.present();
  }

  // Kini siya nga function kay successfully deleted alert 
  async successfullyDeleted() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleted!',
      message: 'Lesson Selected was successfully deleted!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  // Kini siya nga function kay mu route sa pag add or pag edit sa student, at the same time kay maka add sad ug another user 
  updateScoreOrAddStudent() {
    this.router.navigate(['/add-student-score/' + this.selectedTrainingID + '/' + this.selectedLesson + '/' + this.selectedClass])
  }

}
// add-student-score/:trainingID/:lessonID/:classIDI