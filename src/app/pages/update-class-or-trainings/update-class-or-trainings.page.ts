import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { EventTraningServiceService } from '../../events-and-trainings/event-traning-service.service';

// import { DataDisplayProvider } from 'app/providers/data-editing';
import { DataDisplayProvider } from '../../providers/data-editing';

@Component({
  selector: 'app-update-class-or-trainings',
  templateUrl: './update-class-or-trainings.page.html',
  styleUrls: ['./update-class-or-trainings.page.scss'],
})
export class UpdateClassOrTrainingsPage implements OnInit {
  public selectedItemID = ''
  public updateTrainings = {
    Code: '',
    Lesson: '',
    Title: '',
    Description: '',
    Instructor: '',
    typeSelected: 'Trainings',
    Total: 10
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventRequest: EventTraningServiceService,
    private updatedData: DataDisplayProvider
  ) { }

  ngOnInit() {
    this.updateTrainings.typeSelected = this.activatedRoute.snapshot.paramMap.get('typeUpdate');
    const paramsSelectedItem = this.activatedRoute.snapshot.paramMap.get('selectedItemID');
    this.selectedItemID = paramsSelectedItem
    this.getSelectedTraining()

  }

  // Kini siya nga function kay kuhaon niya ang selected training 
  getSelectedTraining() {
    const selectedTraining = this.eventRequest.returnTrainingDetails(this.selectedItemID)
    selectedTraining.subscribe((trainingDetails: any) => {
      this.updateTrainings.Title = trainingDetails[0].title
      this.updateTrainings.Code = trainingDetails[0].code
      this.updateTrainings.Description = trainingDetails[0].description
    })
  }

}
