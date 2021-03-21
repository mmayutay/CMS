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



  // This function is to get all the trainings and classes
  getTrainingsAndClasses(instructorId) {
    return this.http.get(this.url + 'trainings-by-instructor/' + instructorId)
  }

  // This function will add a training or a class with the user who inputed the trainings
  addTrainingsOrClasses(classOrTraining) {
    return this.http.post(this.url + 'trainings-by-instructor/add', classOrTraining);
  }

  // This function will get the specific item that the user selected
  getSelectedTrainingsOrClasses(typeSelected, idSelectedItem) {
    return this.http.post(this.url + 'trainings-by-instructor/get-selected-class', { typeSelected: typeSelected, idSelectedItem: idSelectedItem })
  }

  // A function that get all the students of a certain trainings or event that is being selected
  getStudent(typeSelected, training) {
    return this.http.post(this.url + 'trainings-by-instructor/get-student-of-a-class-training', { typeSelected: typeSelected, training: training });
  }

  // This function is to delete multiple students
  deleteStudents(arrayOfStudentsID) {
    return this.http.post(this.url + 'student-trainings-or-class/delete-multiple-students', { studentsId: arrayOfStudentsID });
  }

  // A function that will add a student to a certain class or trainings
  addStudentToClassOrTrainings(studentsData) {
    return this.http.post(this.url + 'student-trainings-or-class/addToRecords', studentsData);
  }


  // A function that update a value of a selected item in class or in trainings
  updateClassOrTrainings(itemID, updatedItem) {
    return this.http.post(this.url + 'trainings-by-instructor/update-training-or-class/' + itemID, updatedItem)
  }

  // This function will delete the selected item in class or in trainings
  deleteClassOrTrainings(selectedItemId, typeSelected) {
    return this.http.post(this.url + 'trainings-by-instructor/delete-training-or-class/' + selectedItemId, { typeSelected: typeSelected })
  }

  // This function will retrieve all the class and trainings posted by the current user
  returnClassAndTrainingsByUser(id) {
    return this.http.get(this.url + 'trainings-by-instructor/return-by-current-user/' + id)
  }
}
