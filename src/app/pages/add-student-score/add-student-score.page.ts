import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';

@Component({
  selector: 'app-add-student-score',
  templateUrl: './add-student-score.page.html',
  styleUrls: ['./add-student-score.page.scss'],
})
export class AddStudentScorePage implements OnInit {
  public studentsScore = []
  public studentsUpdateScore = {
    type: '',
    studentsID: '',
    newScore: ''
  }
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventRequest:  EventTraningServiceService
  ) { }

  ngOnInit() {
    let type = this.activatedRoute.snapshot.paramMap.get('type');
    this.studentsUpdateScore.type = type
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    const studentsOfClassOrTrainings = this.eventRequest.returnStudentsOfClassOrTrainings(id, type)
    studentsOfClassOrTrainings.subscribe((response: any) => {
      this.studentsScore = response
    })
  }

  getTheUpdatedScore(owner, updatedScore) {
    this.studentsUpdateScore.studentsID = owner.id
    this.studentsUpdateScore.newScore = updatedScore.target.value
    const updateStudentScore = this.eventRequest.updateStudentScore(this.studentsUpdateScore)
    updateStudentScore.subscribe((response: any) => {
      // console.log(response)
    })
  }

  counter(i: number)  {
    return new Array(i)
  }



}
