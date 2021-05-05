import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.page.html',
  styleUrls: ['./add-classes.page.scss'],
})
export class AddClassesPage implements OnInit {
  public chosenType = ''
  public lessonsOfSelectedTraining = ""
  public allUsers = []
  public studentsAdded = []

  public addClasses = {
    newClasses: {
      Name: '',
      Description: '',
      Instructor:'',
      selectedTrainingID: ''
    }
  }

  constructor(
    private request: RequestsService,
    private eventsService: EventTraningServiceService,
    private dataRequest: DataRequestsService,
    private dataDisplays: DataDisplayProvider,
    private router: Router
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addClasses.newClasses.Instructor = id
    })

    this.getAllMembers()
  }

  // Kini siya nga function kay mag add ug class sa certain training 
  addClass(data) {
    var studentRecord = {selectedTrainingID: '', classesID: '', studentID: '', type: this.chosenType}
    studentRecord.selectedTrainingID = this.addClasses.newClasses.selectedTrainingID
    const addClasses = this.eventsService.addClassAndStudents(this.addClasses.newClasses)
    addClasses.subscribe((data: any) => {
      studentRecord.classesID = data.id
      this.studentsAdded.forEach(element => {
        studentRecord.studentID = element
        const newRecord = this.eventsService.addStudentRecord(studentRecord)
        newRecord.subscribe((record: any) => {
          console.log(record)
          this.router.navigate(['/app/tabs/speakers'])
        })
      });
    })
  }

  // $classes->training_id = $request->className['selectedTrainingID'];
  // $classes->name = $request->className['Name'];
  // $classes->remarks = $request->className['Description'];

  // $records->lessons_id = $request->input('selectedTrainingID');
  // $records->classes_id = $request->input('classesID');
  // $records->students_id = $request->input('studentID');
  // $records->type = '';
  // $records->score = 0;
  // $records->overall = 0;
  // $records->remarks = '';

  // Kini siya nga function kay mag add ug students 

  counter(i: number) {
    return new Array(i);
  }

    // Kini siya nga function kay kuhaon niya ang ID sa selected training 
    getIDSelectedTraining(value) {
      this.addClasses.newClasses.selectedTrainingID = value.target.value
      this.returnAllLessons(value.target.value)
    }

      // Kini siya nga function kay iyang i return ang tanan nga lessons sa selected trainings 
  returnAllLessons(trainingID) {
    const lessons = this.eventsService.returnLessons(trainingID)
    lessons.subscribe((data: any) => {
      this.lessonsOfSelectedTraining = data
    })
  }


  getAllMembers() {
    const getUsers = this.dataRequest.returnAllUser()
    getUsers.subscribe((data: any) => {
      this.allUsers = data
    })
  }

  // Kini siya nga function kay mauy mu add ug student sa array 
  addStudent(studentID) {
    document.getElementById(studentID).style.backgroundColor = "rgba(184, 255, 200, 0.5)"
    this.studentsAdded.push(studentID)
  }
 
}
