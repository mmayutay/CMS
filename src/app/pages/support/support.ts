import { Component } from '@angular/core';
import { RequestsService } from '../../logInAndSignupService/requests.service';
import { DataRequestsService } from '../../request-to-BE/data-requests.service';

import { AlertController, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AttendanceAddingService } from '../../request-to-BE/attendance-adding.service';
import { CheckTutorial } from '../../providers/check-tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventAndSCAttendance } from 'app/events-and-trainings/event-and-sc-attendance';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  public showEmpty = false

  public alreadyAttendedArray = []

  public nextRoute = 'reportings'
  public isSunday = false
  public currentDate = (new Date(this.leaders.chosenDate).getMonth() + 1) + '/' + new Date(this.leaders.chosenDate).getDate() + '/' + new Date(this.leaders.chosenDate).getFullYear();
  public hasEvent = false

  public currentUserId = ''
  public currentUserRole = ''
  public currentUser = {
    firstname: '',
    lastname: '',
    id: ''
  };
  public members;
  public groupMembers;
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
    public leaders: CheckTutorial,
    public alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public eventsAndAttendance: EventAndSCAttendance
  ) {
    this.attendance.dataUse
  }

  onChangePage(pageOfItems: Array<any>, type) {
    // update current page of items
    if (type == 'add') {
      if (this.classes.length < (this.paginationCount + 5)) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
        this.paginationCount += 5
        this.count += 5
      }
    } else {
      if ((this.count - 5) < 0) {
        Swal.fire('Sorry', 'No Data to show!', 'error')
      } else {
        this.paginationCount -= 5
        this.count -= 5
      }
    }
    this.pageOfItems = pageOfItems;
    console.log("DFDFD: ", this.pageOfItems)
  }

  ionViewDidEnter() {
    // console.log(new Date().getDay())
    if (new Date().getDay() == 0) {
      this.isSunday = true
    } else {
      this.isSunday = false
    }
    this.nextRoute = this.activatedRoute.snapshot.paramMap.get('nextroute');

    // this.getTheCurrentUserRole();
    this.request.getTheCurrentUserIdInStorage;
    this.returnMembers()
    this.currentUserDetails()
  }

  cellGroupFunction() {
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
    if (!this.attendance.multipleMembersAttendanceCG.includes(member)) {
      this.attendance.multipleMembersAttendanceCG.push(member)
    }
  }

  // Ang pag add ni ug attendance sa sunday celebration 
  addSundayCelebAttendance(member) {
    if (new Date(this.currentDate).getDay() == 0) {
      if (!this.attendance.multipleMembersAttendanceSC.includes(member)) {
        this.attendance.multipleMembersAttendanceSC.push(member)
      }
    } else {
      this.notSunday()
    }
  }

  // Kini sya nga function kay i reroute padung sa kung asa gikan 
  reRouteToWhereItCameFrom() {
    this.router.navigate(['/' + this.nextRoute])
  }


  // Kini siya nga function kay i display ang current user 
  currentUserDetails() {
    const userID = this.request.getTheCurrentUserIdInStorage()
    userID.then((id: any) => {
      const user = this.datarequest.getTheCurrentUser({ userID: id })
      user.subscribe((response: any) => {
        this.currentUser = response[0]
      })
    })
  }

  // Kini siya nga function kay kung ang naka login kay primary or 144, i return ang tanan nga members 
  returnMembers() {
    if (new Date(this.leaders.chosenDate).getDay() == 0) {
      this.isSunday = true
    } else {
      this.isSunday = false
    }
    const currentUser = this.request.getTheCurrentUserIdInStorage()
    currentUser.then((id: any) => {
      const group = this.datarequest.getAllMembersOfAGroup(id)
      group.subscribe((members: any) => {
        this.groupMembers = members
        this.showEmpty = (members.length == 0)
        this.checkIfMemberAlreadyAttended()
      })
    })
  }


  // this function is intended is the current user is also a member, so that this function will retrieve all the
  //members of the group where the current user belong
  getAllMembers() {
    this.datarequest.getMyCellgroup({ leaderid: this.currentUser[0].id }).subscribe(data => {
      this.members = data
      this.groupMembers = this.members
      // this.members.forEach(element => {
      //   this.groupMembers.push(element)
      // });
    })
  }


  // Kini siya nga function kay ang pag add ug attendance sa cellgroup member for a certain event nga selected 
  addAttendanceSelectedEvent() {
    var newUser = {
      newUser: {
        leader: '',
        member: '',
        type: '',
        date: ''
      }
    }
    this.attendance.multipleMembersAttendanceCG.forEach(element => {
      this.attendance.dateOfEvents.type = this.attendance.selectedEventsID
      this.attendance.dateOfEvents.leader = this.currentUser.id
      this.attendance.dateOfEvents.date = new Date(this.leaders.chosenDate).toString()
      this.attendance.dateOfEvents.member = element.id
      const addAttendance = this.attendance.addEventsAttendance(this.attendance.dateOfEvents)
      addAttendance.subscribe((response: any) => {
        this.attendance.successfulAddedAttendance();
        this.router.navigate(['/' + this.nextRoute])
      })
    })
    this.attendance.multipleMembersAttendanceSC.forEach(element => {
      this.attendance.dateOfEvents.type = "Sunday"
      newUser.newUser.date = this.attendance.dateOfEvents.date
      newUser.newUser.leader = this.attendance.dateOfEvents.leader
      newUser.newUser.member = this.attendance.dateOfEvents.member
      const addSundayAttendance = this.attendance.http.post(this.attendance.url + 'attendance', newUser)
      addSundayAttendance.subscribe((response: any) => {
        if (response == false) {
          this.attendance.SundayCelebrationError()
        }
      })
    })
  }

  // Kini siya nga function kay i check kung a certain user kay naka attend ba siya anang selected nga date 
  checkIfMemberAlreadyAttended() {
    this.alreadyAttendedArray = []
    this.groupMembers.forEach(element => {
      const userAttendance = this.eventsAndAttendance.getMemberAttendance(element.id)
      userAttendance.subscribe((attendance: any) => {
        attendance[0].currentEventsAttendance.forEach(element => {
          if (
            (new Date(this.leaders.chosenDate).getMonth() + 1) + '/' + new Date(this.leaders.chosenDate).getDate() + '/' + new Date(this.leaders.chosenDate).getFullYear() ==
            (new Date(element.date).getMonth() + 1) + '/' + new Date(element.date).getDate() + '/' + new Date(element.date).getFullYear()
          ) {
            this.alreadyAttendedArray.push(true)
          } else {
            this.alreadyAttendedArray.push(false)
          }
        });
        attendance[0].currentUserAttendance.forEach(element => {
          if (
            (new Date(this.leaders.chosenDate).getMonth() + 1) + '/' + new Date(this.leaders.chosenDate).getDate() + '/' + new Date(this.leaders.chosenDate).getFullYear() ==
            (new Date(element.date).getMonth() + 1) + '/' + new Date(element.date).getDate() + '/' + new Date(element.date).getFullYear()
          ) {
            this.alreadyAttendedArray.push(true)
          } else {
            this.alreadyAttendedArray.push(false)
          }
        })
      })
    })
  }
}
