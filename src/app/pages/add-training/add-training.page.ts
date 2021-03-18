import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {
  public addTrainings = {
    newTrainings: {
      Name: '',
      Lesson: '',
      Title: '',
      Description: '',
      Instructor:''
    }, 
    currentUser: {
      userID: ''
    },
    typeOfAdd: 'Trainings'
  }

  constructor(
    private request: RequestsService,
    private eventsService: EventTraningServiceService
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addTrainings.currentUser.userID = id
      this.addTrainings.newTrainings.Instructor = id
    })
  }

  onaddEvents(data) {
    const addClass = this.eventsService.addTrainingsOrClasses(this.addTrainings)
    addClass.subscribe((response) => {
      console.log(response)
    })
  }

}
