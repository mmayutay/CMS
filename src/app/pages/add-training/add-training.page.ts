import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {
  public lessonsToCreate = ""
  public addTrainings = {
    newTrainings: {
      code: '',
      title: '',
      description: '',
      instructor: '',
      level: ''
    },
    currentUser: {
      userID: ''
    },
    typeOfAdd: 'Trainings'
  }

  constructor(
    private request: RequestsService,
    private eventsService: EventTraningServiceService,
    private dataDisplays: DataDisplayProvider,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addTrainings.currentUser.userID = id
      this.addTrainings.newTrainings.instructor = id
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  onaddEvents(data) {
    this.presentLoading()
    const trainings = this.eventsService.addTrainings(this.addTrainings.newTrainings)
    trainings.subscribe((data: any) => {
      this.dataDisplays.trainings.push(data)
      this.router.navigate(['/app/tabs/speakers'])
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}

// $table->string('code');
// $table->string('title');
// $table->string('description');
// $table->string('level');