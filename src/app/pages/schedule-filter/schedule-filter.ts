import { Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';



@Component({
  selector: 'page-schedule-filter',
  templateUrl: 'schedule-filter.html',
  styleUrls: ['./schedule-filter.scss'],
})
export class ScheduleFilterPage {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];
  public usersEvents = []

  constructor(
    public confData: ConferenceData,
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private request: RequestsService,
    private eventsRequest: EventTraningServiceService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks')

    this.request.getTheCurrentUserIdInStorage().then(id => {
      this.eventsRequest.retrieveCertainUserEvent(id).subscribe((data: any) => {
        this.usersEvents = data
      })
    })

    // this.confData.getTracks().subscribe((tracks: any[]) => {
    //   tracks.forEach(track => {
    //     this.tracks.push({
    //       name: track.name,
    //       icon: track.icon,
    //       isChecked: (excludedTrackNames.indexOf(track.name) === -1)
    //     });
    //   });
    // });
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracks.forEach(track => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss();
  }

  updateAnEvent(data) {
    this.router.navigate(['/update-my-events-posted/' + data.id])
    this.modalCtrl.dismiss()
  }

  deleteAnEvent(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You wan't to delete " + this.usersEvents[this.usersEvents.indexOf(data)].title + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventsRequest.deleteSelectedEvent(data.id).subscribe((response) => {
          this.successfullyDeleted(data)
          this.usersEvents.splice(this.usersEvents.indexOf(data), 1)
          this.modalCtrl.dismiss();
        })
      }
    })
  }

  async successfullyDeleted(index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Yeyy!',
      message: this.usersEvents[this.usersEvents.indexOf(index)].title + ' is updated successfully!',
      buttons: ['OK']
    });
    this.router.navigate(['/app/tabs/schedule'])

    await alert.present();
  }
}
