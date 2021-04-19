import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.page.html',
  styleUrls: ['./add-lesson.page.scss'],
})
export class AddLessonPage implements OnInit {
  public lessonsToAdd = 1
  public arrayOfLessons = []
  public lessonsAdded = {
    trainingsID: "",
    name: [],
    lesson: [],
    title: [],
    description: []
  }

  public data = {

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lessonsAdded.trainingsID = this.activatedRoute.snapshot.paramMap.get('id')
  }

  // Kini siya nga function kay ang pag add ug lesson sa certain trainings 
  addLessonOfTraining(data) {
    this.data = data.form.value
    this.arrayOfLessons.push(this.data)
    // const addLesson = this.eventRequest.addLessonTraining(this.lessonsAdded)
    // addLesson.subscribe((data: any) => {
    //   console.log(data)
    // })
  }

  counter(i: number) {
    return new Array(i)
  }

  addMultipleLessons(value) {
    this.lessonsToAdd = Number(value.target.value)
  }

  submitLessons() {
    this.arrayOfLessons.forEach(element => {
      const addLessons = this.eventRequest.addLessonTraining(element, this.lessonsAdded.trainingsID)
      addLessons.subscribe((data: any) => {
        this.router.navigate(['/app/tabs/speakers'])
      })
    }); 
  }
}
