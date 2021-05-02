import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { HttpClient } from '@angular/common/http';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { DataDisplayProvider } from '../../providers/data-editing';

@Component({
  selector: 'app-add-student-score',
  templateUrl: './add-student-score.page.html',
  styleUrls: ['./add-student-score.page.scss'],
})
export class AddStudentScorePage implements OnInit {
  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  public trainingsClassAndLessons = {
    trainingTitle: '',
    classTitle: '',
    lessonTitle: ''
  }
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
    private dataRequest: DataRequestsService,
    private dataDisplays: DataDisplayProvider
  ) { 
    // this.loadData();
  }

  ngOnInit() {
    let trainining = this.activatedRoute.snapshot.paramMap.get('trainingID');
    let lesson = this.activatedRoute.snapshot.paramMap.get('lessonID');
    let classID = this.activatedRoute.snapshot.paramMap.get('classID');
    this.getTrainingLessonAndClass(trainining, lesson, classID)
    console.log(this.dataDisplays.allStudentsOfSelectedClass)
    console.log(this.dataDisplays.studentsScores)
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

  // Kini siya nga function kay kuhaon ang mga details sa selected training/lesson/class 
  getTrainingLessonAndClass(trainingID, lessonID, classID) {
    const training = this.eventRequest.returnTrainingDetails(trainingID)
    training.subscribe((trainings: any) => {
      this.trainingsClassAndLessons.trainingTitle = trainings[0].title
    })
    const lesson = this.eventRequest.returnLessonDetails(lessonID)
    lesson.subscribe((lessons: any) => {
      this.trainingsClassAndLessons.lessonTitle = lessons[0].title
    })

    const classChose = this.eventRequest.returnClassDetails(classID)
    classChose.subscribe((classes: any) => {
      this.trainingsClassAndLessons.classTitle = classes[0].name
    })
  }

  submit() {
    console.log(this.trainingsClassAndLessons)
  }

  // Kini siya nga function kay kuhaon niya ang mga students sa gi select nga class 
  // returnStudentsOfClass(classID) {
  //   var counter = 0 
  //   const students = this.eventRequest.getStudentOfClass(classID)
  //   students.subscribe((response: any) => {
  //     response.forEach(element => {
  //       const studentsData = this.dataRequest.getTheCurrentUser({userID: element})
  //       studentsData.subscribe((student: any) => {
  //         counter += 1
  //         // this.returnStudentsScore(student, classID, counter)
  //       })
  //     })
  //   })
  // }

  // Kini siya nga function kay i display na niya ang mga students ug ilang mga score
  // returnStudentsScore(student, classID, counter) {
  //   const studentsScore = this.eventRequest.getStudentOfSelectedClass(classID)
  //   studentsScore.subscribe((scores: any) => {
  //       this.studentsScore.push({student: student[0], studentScore: scores[counter - 1]})
  //   })
  // }

  scoreEditing(score, student) {
    for (let index = 0; index < this.dataDisplays.allStudentsOfSelectedClass.length; index++) {      
      if (student.id == this.dataDisplays.allStudentsOfSelectedClass[index].id) {
        const students = this.eventRequest.returnStudentFromStudentCollection(student.id)
        students.subscribe((response: any) => {
          const updateScore = this.eventRequest.updateScore(response.id, score.target.value)
          updateScore.subscribe((data: any) => {
            this.dataDisplays.studentsScores[index].score = data.score
          })
        })
      }
    }
  }

}
