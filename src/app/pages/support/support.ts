import { Component } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

import { AlertController, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AttendanceAddingService } from '../../request-to-BE/attendance-adding.service';
import { CheckTutorial } from '../../providers/check-tutorial.service';
import { Router } from '@angular/router';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  public isSunday = false
  public currentDate = (new Date(this.leader.chosenDate).getMonth() + 1) + '/' + new Date(this.leader.chosenDate).getDate() + '/' + new Date(this.leader.chosenDate).getFullYear();
  public hasEvent = false

  public currentUserId = ''
  public currentUserRole = ''
  public currentUser = [];
  public members;
  public groupMembers = [];
  public paginationCount = 5
  public count = 0
  public classes;
  pageOfItems: Array<any>;

  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public request: RequestsService,
    private datarequest: DataRequestsService,
    private attendance: AttendanceAddingService,
    private leader: CheckTutorial,
    public alertController: AlertController,
    private router: Router
  ) { 
    this.attendance.dataUse
  }

  onChangePage(pageOfItems: Array<any>, type) {
    if(new Date().getDay()  == 0) {
      this.isSunday = true
    }else {
      this.isSunday = false
    }
    // update current page of items
    if(type == 'add') {
      if(this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount += 5
        this.count += 5
      }
    }else {
      if((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      }else {
        this.paginationCount -= 5
        this.count -= 5
      }
    }
    this.pageOfItems = pageOfItems;
    console.log("DFDFD: ", this.pageOfItems)
  }

  ionViewDidEnter() {
    this.getTheCurrentUserRole();
    this.request.getTheCurrentUserIdInStorage;
  }

  cellGroupFunction(){
    this.request.cellGroup();
  }

  async notSunday() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Not Sunday',
      message: "You can't add a sunday attendance today!",
      buttons: ['OK']
    });

    await alert.present();
  }


  // Ang pag add ni ug attendance if naa bay event karong adlawa
  addEventsAttendance(member) {
    if(!this.attendance.multipleMembersAttendanceCG.includes(member)) {
      this.attendance.multipleMembersAttendanceCG.push(member)
    }
  }

  // Ang pag add ni ug attendance sa sunday celebration 
  addSundayCelebAttendance(member) {
    if(new Date(this.currentDate).getDay() == 0) {
      if(!this.attendance.multipleMembersAttendanceSC.includes(member)) {
        this.attendance.multipleMembersAttendanceSC.push(member)
      }
    }else {
      this.notSunday()
    }
  }


  ifCurrentUserIsMember(){
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == '3'){
          this.currentUserRole = data[0].roles
          this.request.getTheCurrentUserIdInStorage().then(result => {
            this.currentUserId = result
            this.datarequest.getTheCurrentUser({userID: result}).subscribe(response => {
              this.datarequest.getTheCurrentUser({userID: response[0].leader}).subscribe(leaderData => {
                this.currentUser.push(leaderData[0])
                this.getAllMembers();
              })
            })
          })
        }
      })
    })
  }

  getTheCurrentUserRole() {
    this.groupMembers.length = 0
    this.currentUser.length = 0
    this.request.getTheUserRoleFromTheStorage().then(res => {
      this.datarequest.getNetworkWhereIBelong(res).subscribe(data => {
        if(data[0].roles == '3') {
          this.ifCurrentUserIsMember();
        }else if(data[0].roles == "1"){
          this.currentUserRole = data[0].roles
          this.datarequest.getAllTheUserRoles().subscribe(result => {
            this.members = result
            this.members.forEach(element => {
              if(element.roles == '1'){
                this.members.slice(this.members.indexOf(element), 1)
                this.currentUser.push(element)
              }else{
                this.groupMembers.push(element)
              }
            });
          });
        }else{
          this.request.getTheCurrentUserIdInStorage().then(res => {
            this.datarequest.getTheCurrentUser({userID: res}).subscribe((data) => {
              this.currentUser.push(data[0])
            })
            this.datarequest.getMyCellgroup({leaderid: res}).subscribe((data) => {
              this.members = data
              this.members.forEach(element => {
                if(element.leader == res){
                  this.groupMembers.push(element);
                }
              });
            })
          })
        }
      })
    })
  }

  // this function is intended is the current user is also a member, so that this function will retrieve all the
  //members of the group where the current user belong
  getAllMembers() {
    this.datarequest.getMyCellgroup({leaderid: this.currentUser[0].id}).subscribe(data => {
      this.members = data
      this.groupMembers = this.members
      // this.members.forEach(element => {
      //   this.groupMembers.push(element)
      // });
    })
  }


  // Kini siya nga function kay ang pag add ug attendance sa cellgroup member for a certain event nga selected 
  addAttendanceSelectedEvent(){
    this.attendance.multipleMembersAttendanceCG.forEach(element => {
      this.attendance.dateOfEvents.type = this.attendance.selectedEventsID
      this.attendance.dateOfEvents.leader = this.currentUser[0].id
      this.attendance.dateOfEvents.date = new Date().toString()
      this.attendance.dateOfEvents.member = element.id
      const addAttendance = this.attendance.addEventsAttendance(this.attendance.dateOfEvents)
      addAttendance.subscribe((response: any) => {
        this.attendance.successfulAddedAttendance();
        this.router.navigate(['/app/tabs/schedule']) 
      })
    })
    this.attendance.multipleMembersAttendanceSC.forEach(element => {
      this.attendance.dateOfEvents.type = "Sunday"
      const addSundayAttendance = this.attendance.http.post(this.attendance.url + 'attendance', this.attendance.dateOfEvents)
      addSundayAttendance.subscribe((response: any) => {
        if(response == false) {
          this.attendance.SundayCelebrationError()
        }
      })
    })
  }
}
