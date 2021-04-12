import { Component} from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { SpeakerFilterPage } from '../speaker-filter/speaker-filter.page';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  public paginationCount = 5
  public count = 0
  public classes;
  public trainings;
  speakers: any[] = [];
  segmentModel = "Trainings";
  excludeTracks: any = [];
  pageOfItems: Array<any>;

  constructor(
    public confData: ConferenceData,
    private eventsService: EventTraningServiceService,
    private request: RequestsService,
    public modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private dataDisplays: DataDisplayProvider,
    private router: Router
    ) {}

    onChangePage(pageOfItems: Array<any>, type) {
      // update current page of items
      if(type == 'add') {
        if(this.classes.length < (this.paginationCount + 5)) {
          Swal.fire('Sorry', 'No Data to show!', 'error')
        }else {
          this.paginationCount += 5
          this.count += 5
        }
      }else {
        if((this.count - 5) < 0) {
          Swal.fire('Sorry', 'No Data to show!', 'error')
        }else {
          this.paginationCount -= 5
          this.count -= 5
        }
      }
      this.pageOfItems = pageOfItems;
      console.log("DFDFD: ", this.pageOfItems)
    }

  ionViewDidEnter() {  
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.getClassAndTrainings(id)
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  segmentModels(value) {
    this.segmentModel = value.target.value;
  }


  // This function is for adding the a training or a classes 
  addEventOrClass() {
    if(this.segmentModel == 'Trainings') {
      this.router.navigate(['/add-training'])
    }else {
      this.router.navigate(['/add-classes'])
    }
  }
  
  getClassAndTrainings(id) {
    const events = this.eventsService.getTrainingsAndClasses(id)
    events.subscribe((data: any) => {
      this.dataDisplays.distributeDatas(data)
      console.log(data)
      this.trainings =  this.dataDisplays.trainings
      this.classes = this.dataDisplays.classes
    })
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: SpeakerFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    // if (data) {
    //   this.excludeTracks = data;
    // }
  }


  navigateToAddingScore(id, type) {
    this.router.navigate(['/add-student-score/' + id + "/"+ type])
  }
  
}
