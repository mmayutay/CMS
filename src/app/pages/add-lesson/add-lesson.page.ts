import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { DataDisplayProvider } from 'app/providers/data-editing';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.page.html',
  styleUrls: ['./add-lesson.page.scss'],
})
export class AddLessonPage implements OnInit {
  public addLessonCounter = 0
  public currentLengthLesson = 0
  public lessonsToAdd = 1
  public arrayOfLessons = []
  public lessonsAdded = {
    trainingsID: "",
    name: [],
    lesson: "",
    title: [],
    description: []
  }

  public data = {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataDisplays: DataDisplayProvider,
    private eventRequest: EventTraningServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lessonsAdded.trainingsID = this.activatedRoute.snapshot.paramMap.get('id')
    const getLessons = this.eventRequest.returnLessons(this.lessonsAdded.trainingsID)
    getLessons.subscribe((lessons: any) => {
      if (lessons.length != 0) {
        this.currentLengthLesson = Number(lessons[lessons.length - 1].lesson)
      } else {
        this.currentLengthLesson = 0
      }
    })
    this.trainingDetails()
  }

  // Kini siya nga function kay ang pag add ug lesson sa certain trainings 
  addLessonOfTraining(data, index) {
    this.addLessonCounter += 1
    this.data = data.form.value
    this.data['name'] = 'Lesson ' + Number(this.currentLengthLesson + this.addLessonCounter)
    this.arrayOfLessons.push(this.data)
    this.arrayOfLessons[index].lesson = this.currentLengthLesson + this.addLessonCounter
  }

  counter(i: number) {
    return new Array(i)
  }

  addMultipleLessons(value) {
    this.lessonsToAdd = Number(value.target.value)
  }

  submitLessons() {
    this.arrayOfLessons.forEach(element => {
      console.log(element)
      const addLessons = this.eventRequest.addLessonTraining(element, this.lessonsAdded.trainingsID)
      addLessons.subscribe((data: any) => {
        this.dataDisplays.lessonsAdded.push(data)
        this.router.navigate(['/app/tabs/speakers'])
      })
    });
  }

  // Kini siya nga function kay kuhaon ang details sa trainings nga adto i add ang lesson 
  trainingDetails() {
    const trainingsDet = this.eventRequest.returnTrainingDetails(this.lessonsAdded.trainingsID)
    trainingsDet.subscribe((details: any) => {
      console.log(details)
      this.lessonsAdded.lesson = details[0].level
    })
  }
}