import { Injectable } from '@angular/core';
import { EventTraningServiceService } from 'app/events-and-trainings/event-traning-service.service';
import { RequestsService } from '../logInAndSignupService/requests.service';
import { DataRequestsService } from '../request-to-BE/data-requests.service';

@Injectable({
    providedIn: 'root'
})

export class DataDisplayProvider {
    public lessonsAdded = []
    public studentsOfCertainTraining = []
    public dataDisplays = []
    public newData;
    public classes = []
    public trainings = []
    public studentsAvailable = []

    constructor(
        private requet: RequestsService,
        private dataRequest: DataRequestsService,
        private eventRequest: EventTraningServiceService
    ) {
        this.getAllTheStudents();
        this.getClasssesByUser();
    }

    //  Kini siya nga function kay kuhaon daan ang mga classes sa members by user 
    getClasssesByUser() {
        const getCurrentUser = this.requet.getTheCurrentUserIdInStorage()
        getCurrentUser.then((id) => {
            this.getTrainings(id)
        })
    }

    // These functions are the responsible for displays and editing classes and trainings
    updatingCertainEventOrClass(typeOfEdit, newData) {
        if (typeOfEdit.typeSelected == "Trainings") {
            for (let index = 0; index < this.trainings.length; index++) {
                if (this.trainings[index].id == newData.id) {
                    this.trainings[index] = newData
                }
            }
        } else {
            for (let index = 0; index < this.classes.length; index++) {
                if (this.classes[index].id == newData.id) {
                    this.classes[index] = newData
                }
            }
        }
    }

    distributeDatas(data) {
        this.classes = data.classes
        this.trainings = data.trainings
    }

    // Store all the members of a current logged user
    getAllTheStudents() {
        const user = this.requet.getTheCurrentUserIdInStorage()
        user.then((res: any) => {
            const allMembers = this.dataRequest.getMyCellgroup({ leaderid: res })
            allMembers.subscribe((response: any) => {
                this.studentsAvailable = response
            })
        })
    }

    // Kini nga function kay ang pag delete ug usa ka item it's either sa class or sa trainings 
    deleteTrainingOrClass(typeOfDelete: string, value: number) {
        if (typeOfDelete == 'Trainings') {
            this.trainings.splice(value)
        } else {
            this.classes.splice(value)
        }
    }

    // This function is to allow a user to add a trainings
    addNewClassesOrTrainings(value) {
        this.trainings.push(value)
    }

    // Kini siya nga function kay ang pag kuha sa tanan nga trainings created by the current user 
    getTrainings(id) {
        const trainings = this.eventRequest.getTrainings(id)
        trainings.subscribe((data: any) => {
            this.trainings = data
        })
    }

    // Kini nga function kay ang pag retrieve sa mga students sa certain trainings or classes 
    returnStudentsOfCertainTraining(trainingStudents) {
        trainingStudents.forEach(element => {
            console.log(element)
        });
    }

}