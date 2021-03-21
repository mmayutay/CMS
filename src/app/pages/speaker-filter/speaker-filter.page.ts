import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { DataDisplayProvider } from 'app/providers/data-editing';


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
    const userTraAndCla = this.eventRequest
    currentUser.then(id => {
      userTraAndCla.returnClassAndTrainingsByUser(id).subscribe((data: any) => {
        this.trainings = data.trainings
        this.classes = data.classes
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
  updateSelectedItem(type, value) {
    this.router.navigate(['/update-class-or-trainings/' + type + '/' + value.id])
    this.dismiss();
  }

  deleteSelectedItem(type, item) {
    if(type == 'Trainings') {
      const deleteItem = this.eventRequest.deleteClassOrTrainings(this.trainings[this.trainings.indexOf(item)].id, type);
      deleteItem.subscribe((response: any) => {
        this.router.navigate(['/app/tabs/speakers'])
        this.modalCtrl.dismiss()
      })
    }else {
      const deleteItem = this.eventRequest.deleteClassOrTrainings(this.classes[this.classes.indexOf(item)].id, type);
      deleteItem.subscribe((response: any) => {
        console.log(response)
        this.router.navigate(['/app/tabs/speakers'])
        this.modalCtrl.dismiss()
      })
    }
  }

}
