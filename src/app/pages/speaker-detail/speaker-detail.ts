import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service'
import { calendar } from 'app/interfaces/user-options';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  public classOrTrainingStudents = []
  speaker: any;
  segmentModel = "Trainings";
  public selectedItemId = ''
  public detail: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private redirect: Router,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    private eventRequest: EventTraningServiceService,
    private datas: calendar,
    private dataRequest: DataRequestsService
  ) {}

  ionViewWillEnter() {
    // this.dataProvider.load().subscribe((data: any) => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      this.selectedItemId = speakerId
      this.segmentModel = this.route.snapshot.paramMap.get('addType');
      
      const selectedItem = this.eventRequest.getSelectedTrainingsOrClasses(this.segmentModel, speakerId);
      selectedItem.subscribe((data: any) => {
        this.detail = data;
        const allStudents = this.eventRequest.getStudent(this.segmentModel, data.id)
        allStudents.subscribe((response: any) => {
          if(response.length != 0) {
            this.getCertainUser(response)
          }else {
            this.datas.studentsNames.length = 0
          }
        })
      // })
      // if (data && data.speakers) {
      //   for (const speaker of data.speakers) {
      //     if (speaker && speaker.id === speakerId) {
      //       this.speaker = speaker;
      //       break;
      //     }
      //   }
      // }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
  
  async openSpeakerShare(speaker: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + speaker.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  // This function will add the user 
  getCertainUser(student){
    student.forEach(element => {
    const getUser = this.dataRequest.getStudentsData(element.students_id)
      getUser.subscribe((response) => {
        console.log(response)
        this.classOrTrainingStudents.push(response[0])
      })
    });
  }
   
  segmentModels(value) {
    this.segmentModel = value.target.value;
  }
 
  navigateToAddStudent() {
    this.redirect.navigateByUrl('/add-student/' + this.segmentModel + '/' + this.selectedItemId)
  }

  navigateBackToSpeakers() {
    this.classOrTrainingStudents.length = 0
    this.redirect.navigateByUrl('/app/tabs/speakers');
  }
}
