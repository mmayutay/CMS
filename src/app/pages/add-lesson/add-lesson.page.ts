import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventRequest: EventTraningServiceService
  ) { }

  ngOnInit() {
    this.lessonsAdded.trainingsID = this.activatedRoute.snapshot.paramMap.get('id')
  }

  // Kini siya nga function kay ang pag add ug lesson sa certain trainings 
  addLessonOfTraining(data) {
    this.arrayOfLessons.push(data.form.value)
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
    console.log(this.arrayOfLessons)
  }
}
