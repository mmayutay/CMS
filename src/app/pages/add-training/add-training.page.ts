import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {
  public lessonsToCreate = 1
  public addTrainings = {
    newTrainings: {
      Name: '',
      Lesson: [],
      Title: '',
      Description: '',
      Instructor: ''
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
    private router: Router
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addTrainings.currentUser.userID = id
      this.addTrainings.newTrainings.Instructor = id
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  onaddEvents(data) {
    const trainings = this.eventsService.addTrainingsWithLesson(this.addTrainings.newTrainings)
    trainings.subscribe((data: any) => {
      console.log(data)
    })
  }

}

// $table->string('code');
// $table->string('title');
// $table->string('description');
// $table->string('level');