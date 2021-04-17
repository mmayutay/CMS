import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';


@Component({
  selector: 'app-update-selected-training',
  templateUrl: './update-selected-training.page.html',
  styleUrls: ['./update-selected-training.page.scss'],
})
export class UpdateSelectedTrainingPage implements OnInit {
  public trainingDetails = {
    title: '',
    description: '',
    name: ''
  };

  constructor(
    private eventsRequest: EventTraningServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    const lessonDetails = this.eventsRequest.returnLessons(id)
    lessonDetails.subscribe((data: any) => {
      console.log(data)
      this.trainingDetails = data[0]
    })

  }

}
