import { Injectable } from '@angular/core';
import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { DataRequestsService } from 'app/request-to-BE/data-requests.service';

@Injectable({
    providedIn: 'root'
})

export class DataDisplayProvider {
    public dataDisplays = []
    public newData;
    public classes = []
    public trainings = []
    public studentsAvailable = []

    constructor(
        private requet: RequestsService,
        private dataRequest: DataRequestsService
    ) {
        this.getAllTheStudents();
     }

    // These functions are the responsible for displays and editing classes and trainings
    updatingCertainEventOrClass(typeOfEdit, newData) {
        if (typeOfEdit.typeSelected == "Trainings") {
            for (let index = 0; index < this.trainings.length; index++) {
                if (this.trainings[index].id == newData.id) {
                    this.trainings[index] = newData
                }
            }
        }else {
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
            const allMembers = this.dataRequest.getMyCellgroup({leaderid: res})
            allMembers.subscribe((response: any) => {
                this.studentsAvailable = response
            })
        })
    }

    // This function is to allow a user to add a class or a trainings
    addNewClassesOrTrainings(typeOfAdd, value) {
        if(typeOfAdd == 'Trainings') {
            this.trainings.push(value)
        }else {
            this.classes.push(value)
        }
    }

}