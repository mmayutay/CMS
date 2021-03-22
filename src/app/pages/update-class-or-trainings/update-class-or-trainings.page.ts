import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { DataDisplayProvider } from 'app/providers/data-editing';

@Component({
  selector: 'app-update-class-or-trainings',
  templateUrl: './update-class-or-trainings.page.html',
  styleUrls: ['./update-class-or-trainings.page.scss'],
})
export class UpdateClassOrTrainingsPage implements OnInit {
  public selectedItemID = ''
  public updateTrainings = {
    Name: '',
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

    const getTheSelectedItem = this.eventRequest.getSelectedTrainingsOrClasses(this.updateTrainings.typeSelected, paramsSelectedItem)
    getTheSelectedItem.subscribe((data: any) => {
      this.updateTrainings.Name = data.name
      this.updateTrainings.Lesson = data.lesson
      this.updateTrainings.Title = data.title
      this.updateTrainings.Description = data.description
      this.updateTrainings.Instructor = data.instructor
    })
  }

  updateTrainingsOrClass(data) {
    const updateSelectedItem = this.eventRequest.updateClassOrTrainings(this.selectedItemID, this.updateTrainings)
    updateSelectedItem.subscribe((data: any) => {
      this.updatedData.updatingCertainEventOrClass(this.updateTrainings, data)
      this.router.navigate(['/app/tabs/speakers'])
    })
  }



}
