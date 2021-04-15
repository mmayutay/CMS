import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { HttpClient } from '@angular/common/http';

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
  
  page = 0;
  resultsCount = 10;
  totalPages = 10;
  bulkEdit = false;
  sortDirection = 0;

  data = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventRequest:  EventTraningServiceService,
    private http: HttpClient,
  ) { 
    this.loadData();
  }

  ngOnInit() {
    let type = this.activatedRoute.snapshot.paramMap.get('type');
    this.studentsUpdateScore.type = type
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    const studentsOfClassOrTrainings = this.eventRequest.returnStudentsOfClassOrTrainings(id, type)
    studentsOfClassOrTrainings.subscribe((response: any) => {
      this.studentsScore = response
    })
  }

  loadData(){
    this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe(res =>{
      console.log("res_ ", res);
      this.data = res['results'];
    });
  }

  sortby(key){

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
