import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { calendar } from '../../interfaces/user-options';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  public partialArray = []
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;

  constructor(
    public menu: MenuController,
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    private eventRequest: EventTraningServiceService,
    private calendar: calendar
  ) { }

  ngOnInit() {
    this.menu.enable(true)
    // this.updateSchedule();
    this.getAllTheEventsAndDisplay({target: {value: 'all'}});

    this.ios = this.config.get('mode') === 'ios';
  }

  // updateSchedule() {
  //   // Close any open sliding items when the schedule updates
  //   if (this.scheduleList) {
  //     this.scheduleList.closeSlidingItems();
  //   }

  //   this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
  //     this.shownSessions = data.shownSessions;
  //     this.groups = data.groups;
  //   });
  // }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      // this.updateSchedule();
      this.getAllTheEventsAndDisplay({target: {value: 'all'}})
    }
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.title} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }

  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData);
            this.getAllTheEventsAndDisplay({target: {value: 'favorites'}});

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  searchEvent(value) {
    this.groups.forEach(element => {
      if(element.title.toLowerCase().includes(value.target.value)) {
        if(!this.partialArray.includes(element)) {
          this.partialArray.push(element)
        }
      }
    })
    if(this.partialArray.length != 0) {
      this.groups = this.partialArray
    }
  }

  getAllTheEventsAndDisplay(value) {
    var dataToDisplay = []
    var partialDataHandler;
    if(value.target.value == "all") {
      this.eventRequest.retrieveAllAnnouncement().subscribe(response => {
        partialDataHandler = response
        partialDataHandler.forEach(element => {
          element.start_time = new Date(element.start_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
          element.end_time = new Date(element.end_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
          element.start_date = this.calendar.convertMonth(new Date(element.start_date).getMonth()) + '/' + new Date(element.start_date).getDate() + '/' + new Date(element.start_date).getFullYear()
          element.end_date = this.calendar.convertMonth(new Date(element.end_date).getMonth()) + '/' + new Date(element.end_date).getDate() + '/' + new Date(element.end_date).getFullYear()
          dataToDisplay.push(element)
        });
        this.shownSessions = dataToDisplay
        this.groups = dataToDisplay
      })
    } else {
      this.shownSessions = this.user.favorites
      this.groups = this.user.favorites
    }
  }
}
