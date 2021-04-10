import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RequestsService } from 'app/logInAndSignupService/requests.service';
import { RequestsService } from '../logInAndSignupService/requests.service';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class AttendanceAddingService {
    public selectedEventsID = ''
    public eventOwner = ''
    public multipleMembersAttendanceCG = []
    public multipleMembersAttendanceSC = []
    public url = "http://localhost:8000/api/"
    public currentDate = new Date().getMonth() + '/' + new Date().getDate() + '/' + new Date().getFullYear();
    public hasEvent = false
    public dateOfEvents = {
        leader: '',
        member: '',
        type: '',
        date: ''
    }
    public dataUse = ''

    constructor(
        public http: HttpClient,
        private request: RequestsService,
        private alertController: AlertController
    ) {
        this.getAllEventsDates();
    }

    // Kini siya kay ang pag add ug attendance sa Sunday
    addAttendanceIfTodayIsSunday(memberID) {
        this.dateOfEvents.member = memberID
        if (new Date(this.currentDate).getDay() == 0) {
            return this.http.post(this.url + 'attendance', this.dateOfEvents);
        } else {
            this.SundayCelebrationError()
            return this.http.get(this.url + 'add-attendance/get-all-events-dates');
        }
    }

    // Kini siya nga function kay pag add ni ug attendance sa kung naay ni exist nga event or sunday ba karong adlawa
    addAttendanceOfThisDay(memberID) {
        this.dateOfEvents.member = memberID
        if (this.hasEvent == true) {
            return this.http.post(this.url + 'add-attendance/today-has-event', this.dateOfEvents);
        } else {
            this.EventsError()
            return this.http.get(this.url + 'add-attendance/get-all-events-dates');
        }
    }

    // Kini nga function kay ang pag kuha sa tanan nga date sa mga events 
    getAllEventsDates() {
        const getDates = this.http.get(this.url + 'add-attendance/get-all-events-dates');
        getDates.subscribe((response: any) => {
            response.forEach(element => {
                if (this.currentDate == new Date(element.start_date).getMonth() + '/' + new Date(element.start_date).getDate() + '/' + new Date(element.start_date).getFullYear()) {
                    this.dateOfEvents.type = element.id
                    this.dateOfEvents.date = this.currentDate
                    this.hasEvent = true
                }
            });
        })

    }

    // Pag kuha sa leaders ID nga na store sa application storage 
    getUser() {
        this.request.getTheCurrentUserIdInStorage().then((id: any) => {
            this.dateOfEvents.leader = id
        })
    }

    async EventsError() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Ooppss',
            subHeader: 'No attendance added!',
            message: 'No event booked for this day!',
            buttons: ['OK']
        });

        await alert.present();
    }

    async SundayCelebrationError() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Ooppss',
            subHeader: 'No attendance added!',
            message: "You can't add attendance today because today is not Sunday!",
            buttons: ['OK']
        });

        await alert.present();
    }

    async successfulAddedAttendance() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Yeheyy!',
          message: "Member's attendance successfully added!",
          buttons: ['OK']
        });
    
        await alert.present();
      }


    //   Kini siya nga function kay ang pag save sa mga members attendance sa database 
    saveMembersAttendance() {
        if (this.multipleMembersAttendanceCG.length != 0) {
            this.multipleMembersAttendanceCG.forEach(element => {
                this.dateOfEvents.member = element.id
                this.http.post(this.url + 'add-attendance/today-has-event', this.dateOfEvents)
            })
        }

        if (this.multipleMembersAttendanceSC.length != 0) {
            if (new Date().getDay() == 0) {
                this.multipleMembersAttendanceSC.forEach(element => {
                    this.dateOfEvents.member = element.id
                    this.http.post(this.url + 'attendance', this.dateOfEvents)
                })
            }
        }
    }

    // Kini siya nga function kay ang pag add ug attendance sa certain event 
    addEventsAttendance(data: any) {
        return this.http.post(this.url + 'add-attendance/today-has-event', data)
    }

}
// $table->id()->autoIncrement();
// $table->string('leader');
// $table->string('member');
// $table->string('type');
// $table->string('date');