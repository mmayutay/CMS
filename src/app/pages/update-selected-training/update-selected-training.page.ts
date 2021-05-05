import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';


@Component({
  selector: 'app-update-selected-training',
  templateUrl: './update-selected-training.page.html',
  styleUrls: ['./update-selected-training.page.scss'],
})
export class UpdateSelectedTrainingPage implements OnInit {
  public trainingDetails = {
    id: '',
    title: '',
    description: '',
    name: ''
  };

  constructor(
    private eventsRequest: EventTraningServiceService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    const lessonDetails = this.eventsRequest.returnLessonDetails(id)
    lessonDetails.subscribe((data: any) => {
      this.trainingDetails = data[0]
    })

  }

  addLessonOfTraining(data) {
    const updatedLesson = this.eventsRequest.updateLesson(this.trainingDetails.id, this.trainingDetails)
    updatedLesson.subscribe((response: any) => {
      console.log(response)
      this.showUpdatedSucessfully(response.success)
    })
  }

  async showUpdatedSucessfully(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: message,
      message: 'This lesson is updated successfully.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['/app/tabs/speakers'])
  }

}
