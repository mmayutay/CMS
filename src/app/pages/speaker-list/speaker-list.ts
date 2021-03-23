import { Component} from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { SpeakerFilterPage } from '../speaker-filter/speaker-filter.page';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import Swal from 'sweetalert2';


import { DataDisplayProvider } from 'app/providers/data-editing';

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
    private dataDisplays: DataDisplayProvider
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
  
  getClassAndTrainings(id) {
    const events = this.eventsService.getTrainingsAndClasses(id)
    events.subscribe((data: any) => {
      this.trainings = data.trainings
      this.classes = data.classes
      console.log(this.classes)
      this.dataDisplays.distributeDatas(data)
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
  
}
