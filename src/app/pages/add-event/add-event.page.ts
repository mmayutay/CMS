import { Component, OnInit } from '@angular/core';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public start_time = ''
  public end_time = ''
  public addEvents = {
    newEvents: {
      Title: '',
      Description: '',
      Start_date: '',
      Start_time: null,
      End_date: '',
      End_time: '',
      Location: ''
    }, 
    currentUser: {
      userID: ''
    }
  }

  constructor(
    private eventRequest: EventTraningServiceService,
    private alertController: AlertController,
    private router: Router,
    private request: RequestsService
  ) { }

  ngOnInit() {
    this.getTheCurrentUser();
  }

  onaddEvents(data) {
    this.eventRequest.addEventsAndAnnouncements(this.addEvents).subscribe(response => {
      if(response != undefined) {
        this.successFullyAdded()
      }
    })
  }

  showDate(type) {
    if(type == 'start_time'){
      this.start_time = new Date(this.addEvents.newEvents.Start_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }else if(type == 'end_time') {
      this.end_time = new Date(this.addEvents.newEvents.End_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
  }


  async successFullyAdded() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Yeyy!',
      message: 'An Event' + this.addEvents.newEvents.Title + ' successfully added!',
      buttons: ['OK']
    });
    this.router.navigate(['/app/tabs/schedule'])

    await alert.present();
  }

  getTheCurrentUser() {
    this.request.getTheCurrentUserIdInStorage().then(id => { 
      this.addEvents.currentUser.userID = id
    })
  }

}
