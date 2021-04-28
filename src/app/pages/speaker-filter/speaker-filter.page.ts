import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config, ModalController, NavParams } from '@ionic/angular';
// import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';


@Component({
  selector: 'app-speaker-filter',
  templateUrl: './speaker-filter.page.html',
  styleUrls: ['./speaker-filter.page.scss'],
})
export class SpeakerFilterPage implements OnInit {
  public trainings = []
  public classes = []

  constructor(
    public modalCtrl: ModalController,
    private eventRequest: EventTraningServiceService,
    private request: RequestsService,
    private router: Router,
    private dataDisplays: DataDisplayProvider
  ) { }

  ngOnInit() {
    const currentUser = this.request.getTheCurrentUserIdInStorage()
    // const userTraAndCla = this.eventRequest
    currentUser.then(id => {
      const getTrainings = this.eventRequest.getTrainings(id)
      getTrainings.subscribe((trainings: any) => {
        this.trainings = trainings
      })
    })
  }

  applyFilters() {
    this.dismiss()
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  // This function is to updated selected item in classes or in trainings
  updateSelectedItem(value) {
    this.router.navigate(['/update-class-or-trainings/' + value.id])
    this.dismiss();
  }

  deleteSelectedItem(type, item) {
    if(type == 'Trainings') {
      this.dataDisplays.deleteTrainingOrClass('Trainings', this.trainings.indexOf(item))
    }else {
      this.dataDisplays.deleteTrainingOrClass('Classes', this.classes.indexOf(item))
    }
  }

}
