import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventTraningServiceService {
  public url = "http://localhost:8000/api/"

  constructor(
    private http: HttpClient
  ) { }

  addEventsAndAnnouncements(event) {
    return this.http.post(this.url + 'add-event-announcement', event);
  }

  // This function is to show all the events that a certain user added
  retrieveAllAnnouncement() {
    return this.http.get(this.url + 'add-event-announcement/display')
  }

  // This function is to retrieve all the events posted by a certain user
  retrieveCertainUserEvent(id) {
    return this.http.get(this.url + "event-owner/" + id)
  }

  // This function is to update the users posted event
  updateEvent(id, updatedData) {
    return this.http.post(this.url + 'add-event-announcement/update/' + id, updatedData)
  }

  // This function return the selected item to edit
  returnTheSelectedEvent(id) {
    return this.http.get(this.url + 'event-return/' + id)
  }

  // This function will delete the selected item by the user
  deleteSelectedEvent(id) {
    return this.http.delete(this.url + 'add-event-announcement/delete/' + id)
  }

  // This function is to delete multiple students
  deleteStudents(trainingID, arrayOfStudentsID) {
    return this.http.post(this.url + 'student-trainings-or-class/delete-multiple-students', { studentsId: arrayOfStudentsID, selectedTraining: trainingID });
  }

  // A function that will add a student to a certain class or trainings
  addStudentToClassOrTrainings(studentsData) {
    return this.http.post(this.url + 'student-trainings-or-class/addToRecords', studentsData);
  }

  // Kini nga function kay kuhaon niya ang tanan nga students sa certain class or training 
  returnStudentsOfClassOrTrainings(id, type) {
    return this.http.get(this.url + "student-trainings-or-class/get-students-trainings-classes/" + id + "/" + type);
  }

  // Kini siya nga function kay ang pag update sa score sa certain student sa class or trainings nga na belong siya
  updateStudentScore(data) {
    return this.http.post(this.url + "student-trainings-or-class/update-students-score", data)
  }



  // Kini siya nga function kay ang pag add ug trainings with lessons sa 
  addTrainings(data) {
    return this.http.post(this.url + 'trainings-and-classes/add-trainings-with-lessons', data)
  }

  // Kini siya nga function kay i return ang tanan nga mga trainings created by the current user 
  getTrainings(id) {
    return this.http.get(this.url + 'trainings-and-classes/get-all-trainings/' + id)
  }

  // Kini siya nga function kay mag add ug lesson sa certain trainings 
  addLessonTraining(data) {
    return this.http.post(this.url + 'trainings-and-classes/add-lesson-of-training', data);
  }

  // Kini siya nga function kay iyang i return ang tanan nga lesson sa selected training 
  returnLessons(id) {
    return this.http.get(this.url + 'trainings-and-classes/return-lesson-of-selected-training/' + id)
  }
}