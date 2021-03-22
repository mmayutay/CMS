import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { SpeakerFilterPage } from '../speaker-filter/speaker-filter.page';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { DataDisplayProvider } from 'app/providers/data-editing';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
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


  ionViewDidEnter() {   
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.getClassAndTrainings(id)
    })
  }

  segmentModels(value) {
    this.segmentModel = value.target.value;
  }
  getClassAndTrainings(id) {
    const events = this.eventsService.getTrainingsAndClasses(id)
    events.subscribe((data: any) => {
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
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
