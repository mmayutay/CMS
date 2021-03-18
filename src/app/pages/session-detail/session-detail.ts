import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { calendar } from '../../interfaces/user-options';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private calender: calendar,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getAllDataOfCertainEvent();
  }

  getAllDataOfCertainEvent() {
    const sessionId = this.route.snapshot.paramMap.get('sessionId');
    const returnEvent = this.eventRequest.returnTheSelectedEvent(sessionId);
    
    returnEvent.subscribe((data: any) => {
      data.start_time = new Date(data.start_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      data.end_time = new Date(data.end_time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      data.start_date = this.calender.convertMonth(new Date(data.start_date).getMonth()) + '/' + new Date(data.start_date).getDate() + '/' + new Date(data.start_date).getFullYear()
      data.end_date = this.calender.convertMonth(new Date(data.end_date).getMonth()) + '/' + new Date(data.end_date).getDate() + '/' + new Date(data.end_date).getFullYear()
      this.session = data
      this.checkIfSessionAlreadyAdded();
    })
    // this.dataProvider.load().subscribe((data: any) => {
    //   if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
    //     const sessionId = this.route.snapshot.paramMap.get('sessionId');
    //     for (const group of data.schedule[0].groups) {
    //       if (group && group.sessions) {
    //         for (const session of group.sessions) {
    //           if (session && session.id === sessionId) {
    //             this.session = session;

    //             this.isFavorite = this.userProvider.hasFavorite(
    //               this.session.name
    //             );

    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // })
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.userProvider.removeChosenFavorite(this.session.id);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }

  checkIfSessionAlreadyAdded() {
    this.userProvider.favorites.forEach((element: any) => {
      if(element.id == this.session.id) {
        this.showToast(this.session.title)
        this.isFavorite = true
      }else{
        this.isFavorite = false
      }
    })
  }

  async showToast(title) {
      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${title} is added to prioritize!`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

      // Present the toast at the bottom of the page
      await toast.present();
  }

  
}
