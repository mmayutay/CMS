import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  addEvents = {
    newEvents: {
      Title: '',
      Description: '',
      Start_date: '',
      Start_time: null,
      End_date: '',
      End_time: '',
      Location: ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onaddEvents(data) {
    console.log(this.addEvents)

  }

  showDate(type) {
    console.log(this.addEvents)
  }

}
