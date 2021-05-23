import { Injectable } from "@angular/core"
import { EventTraningServiceService } from "app/events-and-trainings/event-traning-service.service"


@Injectable({
    providedIn: "root",
})

export class TrainingsStorage {
    public allTrainings = []
    public allClasses = []

    constructor(
        public eventsService: EventTraningServiceService
    ) { }

    getAllTrainings() {
        const allTrainings = this.eventsService.getAllTrainingsByAnyUser()
        allTrainings.subscribe((response: any) => {
            console.log(response)
            this.allTrainings = response
        })
    }

}