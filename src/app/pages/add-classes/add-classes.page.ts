import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.page.html',
  styleUrls: ['./add-classes.page.scss'],
})
export class AddClassesPage implements OnInit {
  public addClasses = {
    newClasses: {
      Name: '',
      Lesson: '',
      Title: '',
      Description: '',
      Instructor:''
    }, 
    currentUser: {
      userID: ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
