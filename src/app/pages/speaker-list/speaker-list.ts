import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';


@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  public classes;
  public trainings;
  speakers: any[] = [];
  segmentModel = "Trainings";

  constructor(
    public confData: ConferenceData,
    private eventsService: EventTraningServiceService,
    private request: RequestsService
    ) {}

  ionViewDidEnter() {   
    const getCurrentUser = this.request.getTheCurrentUserIdInStorage()
    getCurrentUser.then((id) => {
      this.getClassAndTrainings(id)
    })

    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  segmentModels(value) {
    this.segmentModel = value.target.value;
  }
  getClassAndTrainings(id) {
    const events = this.eventsService.getTrainingsAndClasses(id)
    events.subscribe((data: any) => {
      this.trainings = data.trainings
      this.classes = data.classes
    })
  }
  
}
