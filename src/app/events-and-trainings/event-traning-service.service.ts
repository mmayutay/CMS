import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventTraningServiceService {
  public url = "http://localhost:8080/api/"

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

  // Kini siya nga function kay i check if ang selected student kay already a student sa class or dili 
  checkStudent(studentID, classID) {
    return this.http.get(this.url + 'trainings-and-classes/check-student-already-exist/' + studentID + '/' + classID)
  }

  // Kini siya nga function kay mag remove ug student sa certain class 
  removeStudentOfClass(studentID, classID) {
    return this.http.delete(this.url + 'trainings-and-classes/remove-student-from-class/' + studentID + '/' + classID)
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

  // Kini siya nga function kay kuhaon tanan nga trainings 
  getAllTrainingsByAnyUser() {
    return this.http.get(this.url + 'trainings-and-classes/return-all-traininings')
  }

  // Kini siya nga function kay mag add ug lesson sa certain trainings 
  addLessonTraining(data, id) {
    return this.http.post(this.url + 'trainings-and-classes/add-lesson-of-training/' + id, data);
  }

  // Kini siya nga function kay i update ang selected lesson 
  updateLesson(lessonID, updatedData) {
    return this.http.post(this.url + 'lesson/update/' + lessonID, updatedData)
  }

  // Kini siya nga function kay iyang i return ang tanan nga lesson sa selected training 
  returnLessons(id) {
    return this.http.get(this.url + 'trainings-and-classes/return-lesson-of-selected-training/' + id)
  }

  // Kini siya nga function kay iyang i return ang tanan nga classes sa lesson under sa certain training 
  returnClassesOfTraining(id) {
    return this.http.get(this.url + 'trainings-and-classes/return-classes-of-selected-training/' + id);
  }

  // Kini siya nga function kay mag add siya ug class at the same time kay mga students sa created classes 
  addClassAndStudents(className) {
    return this.http.post(this.url + 'trainings-and-classes/add-classes-with-students', { className: className })
  }

  // Kini siya function kay i update ang details sa selected class 
  updateClassDetails(classID, data) {
    return this.http.post(this.url + 'trainings-and-classes/update-class-of-training/' + classID, data)
  }

  // Kini siya nga function kay i return ang selected class 
  returnClassDetails(classesId) {
    return this.http.get(this.url + 'trainings-and-classes/return-selected-class/' + classesId)
  }

  // Kini siya nga function kay i return niya ang selected training 
  returnTrainingDetails(trainingID) {
    return this.http.get(this.url + 'trainings-and-classes/return-selected-training/' + trainingID)
  }

  // Kini siya nga function kay i return ang details sa selected lesson 
  returnLessonDetails(lessonID) {
    return this.http.get(this.url + 'trainings-and-classes/return-selected-lesson/' + lessonID);
  }

  // Kini siya nga function kay iyang i return ang mga student sa selected lesson at the same time the same classes 
  returnStudentsOfClasses(lessonID, classID) {
    return this.http.get(this.url + 'class-records/get-students/' + lessonID + '/' + classID);
  }

  // Kini siya nga function kay i add ang selected user dn himuon siya nga student anang certain class 
  addStudentToStudentCollection(studentsData) {
    return this.http.post(this.url + 'trainings-and-classes/add-students-to-class', { userID: studentsData })
  }

  // Kini siya nga function kay mag add ug record sa certain student 
  addStudentRecord(studentData) {
    return this.http.post(this.url + 'trainings-and-classes/add-students-records', studentData)
  }

  // Kini siya nga function kay kuhaon niya ID nga gikan na jud sa cms users nga table 
  getStudentOfClass(classID) {
    return this.http.get(this.url + 'trainings-and-classes/get-students-of-selected-class/' + classID)
  }

  // Kini siya nga function kay kuhaon ang students sulod sa usa ka class 
  getStudentOfSelectedClass(classID) {
    return this.http.get(this.url + 'trainings-and-classes/students-of-the-class/' + classID);
  }

  // Kini siya nga function kay i update ang score sa certain student 
  updateScore(studentId, updatedScore, classID) {
    return this.http.get(this.url + 'trainings-and-classes/update-students-score/' + studentId + '/' + updatedScore + '/' + classID)
  }

  // Kini siya nga function kay mag delete ug lesson sa certain training 
  deleteLessonOfTraining(lessonID) {
    return this.http.get(this.url + 'trainings-and-classes/deleteLessonOfTraining/' + lessonID)
  }

  // Kini siya nga function kay i return ang certain student sa student collection 
  returnStudentFromStudentCollection(user_id) {
    return this.http.get(this.url + 'trainings-and-classes/get-certain-student-collection-student/' + user_id)
  }
}