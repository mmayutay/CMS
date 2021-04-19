import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.page.html',
  styleUrls: ['./add-classes.page.scss'],
})
export class AddClassesPage implements OnInit {
  public lessonsToCreate = 1
  public addClasses = {
    newClasses: {
      Name: '',
      Lesson: [],
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
    private eventsService: EventTraningServiceService,
    private dataDisplays: DataDisplayProvider,
    private router: Router
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addClasses.currentUser.userID = id
      this.addClasses.newClasses.Instructor = id
    })
  }

  addClass(data) {
    var dataPass = {
      Lesson: [],
      type: '',
      trainingID: ''
    }
  }

  counter(i: number) {
    return new Array(i);
  }

}
