import { Component, OnInit } from '@angular/core';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-my-events-posted',
  templateUrl: './update-my-events-posted.page.html',
  styleUrls: ['./update-my-events-posted.page.scss'],
})
export class UpdateMyEventsPostedPage implements OnInit {
  public eventSelectedId = ''
  public start_time = ''
  public end_time = ''
  public certainEvent = {
    title: '',
    description: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    location: ''
  };

  constructor(
    private eventRequest: EventTraningServiceService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    let params = this.activatedRoute.snapshot.paramMap.get('id')
    
    this.eventRequest.returnTheSelectedEvent(params).subscribe((data: any) => {
      this.certainEvent = data
      this.eventSelectedId = data.id
    })
  }

  updateEvent(data) {
    this.eventRequest.updateEvent(this.eventSelectedId, this.certainEvent).subscribe((response: any) => {
      this.certainEvent = response
      this.successFullyAdded()
    })
  }
  showDate(type) {
    if(type == 'start_time'){
      this.start_time = new Date(this.certainEvent.start_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }else if(type == 'end_time') {
      this.end_time = new Date(this.certainEvent.end_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
  }

  async successFullyAdded() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Yeyy!',
      message: this.certainEvent.title + ' is updated successfully!',
      buttons: ['OK']
    });
    this.router.navigate(['/app/tabs/schedule'])

    await alert.present();
  }

}
