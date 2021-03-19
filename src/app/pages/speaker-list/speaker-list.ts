import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { SpeakerFilterPage } from '../speaker-filter/speaker-filter.page';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';



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
    public routerOutlet: IonRouterOutlet
    


    ) {}
    onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.speakers = pageOfItems;
      console.log("DFDFD: ", this.speakers)
    }

  ionViewDidEnter() {   
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.getClassAndTrainings(id)
    })

    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  segmentModels(value) {
    this.segmentModel = value.target.value;
  }
  getClassAndTrainings(id) {
    const events = this.eventsService.getTrainingsAndClasses(id)
    events.subscribe((data: any) => {
      this.trainings = data.trainings
      this.classes = data.classes
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
