import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.page.html',
  styleUrls: ['./add-classes.page.scss'],
})
export class AddClassesPage implements OnInit {
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
    private dataDisplays: DataDisplayProvider
  ) { }

  ngOnInit() {
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.addClasses.newClasses.Instructor = id
    })

    this.getAllMembers()
  }

  addClass(data) {
    const addClasses = this.eventsService.addClassAndStudents(this.addClasses.newClasses, this.studentsAdded)
    addClasses.subscribe((data: any) => {
      console.log(data)
    })
  }

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
