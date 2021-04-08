import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { DataDisplayProvider } from 'app/providers/data-editing';
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
    const addClass = this.eventsService.addTrainingsOrClasses(this.addClasses)
    addClass.subscribe((response: any) => {
      this.dataDisplays.addNewClassesOrTrainings('Classes', response)
      for (let index = 0; index < this.addClasses.newClasses.Lesson.length; index++) {
        dataPass.Lesson = this.addClasses.newClasses.Lesson[index]
        dataPass.trainingID = response.id 
        dataPass.type = "Classess"
        const addLessons = this.eventsService.addLessonOfATrainingOrClass(dataPass)
        addLessons.subscribe((response: any) => {
          this.router.navigate(['/app/tabs/speakers'])
        })
      }
    })
  }

  counter(i: number) {
    return new Array(i);
  }

}
