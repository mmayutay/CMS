import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.page.html',
  styleUrls: ['./add-classes.page.scss'],
})
export class AddClassesPage implements OnInit {
  public addClasses = {
    newClasses: {
      Name: '',
      Lesson: '',
      Title: '',
      Description: '',
      Instructor:''
    }, 
    currentUser: {
      userID: ''
    },
    typeOfAdd: 'Classes'
  }

  constructor(
    private request: RequestsService,
    private eventsService: EventTraningServiceService
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addClasses.currentUser.userID = id
      this.addClasses.newClasses.Instructor = id
    })
  }

  addClass(data) {
    const addClass = this.eventsService.addTrainingsOrClasses(this.addClasses)
    addClass.subscribe((response) => {
      console.log(response)
    })
  }


}
