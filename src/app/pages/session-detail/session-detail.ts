import { Component } from "@angular/core";

import { ConferenceData } from "../../providers/conference-data";
import { ActivatedRoute } from "@angular/router";
import { UserData } from "../../providers/user-data";

import { EventTraningServiceService } from "../../events-and-trainings/event-traning-service.service";
import { calendar } from "../../interfaces/user-options";
import { ToastController } from "@ionic/angular";
import { AttendanceAddingService } from "app/request-to-BE/attendance-adding.service";
import { CheckTutorial } from "app/providers/check-tutorial.service";
import { DataRequestsService } from "app/request-to-BE/data-requests.service";
import { RequestsService } from "app/logInAndSignupService/requests.service";
import { EventAndSCAttendance } from "app/events-and-trainings/event-and-sc-attendance";

@Component({
  selector: "page-session-detail",
  styleUrls: ["./session-detail.scss"],
  templateUrl: "session-detail.html",
})
export class SessionDetailPage {
  public members = [];
  public membersAttendance = []
  session: any;
  isFavorite = false;
  defaultHref = "";

  constructor(
    private request: RequestsService,
    private userProvider: UserData,
    private route: ActivatedRoute,
    private eventRequest: EventTraningServiceService,
    private calender: calendar,
    private toastCtrl: ToastController,
    private attendance: AttendanceAddingService,
    private leader: CheckTutorial,
    private dataRequest: DataRequestsService,
    private eventsAttendance: EventAndSCAttendance
  ) { }

  ngOnInit() {
    this.getAllDataOfCertainEvent();
    this.getAllMembers();
  }

  getAllDataOfCertainEvent() {
    const sessionId = this.route.snapshot.paramMap.get("sessionId");
    this.attendance.selectedEventsID = sessionId;
    const returnEvent = this.eventRequest.returnTheSelectedEvent(sessionId);

    returnEvent.subscribe((data: any) => {
      this.leader.chosenDate = data.start_date;
      data.start_time = new Date(data.start_time).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      data.end_time = new Date(data.end_time).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      data.start_date =
        this.calender.convertMonth(new Date(data.start_date).getMonth()) +
        "/" +
        new Date(data.start_date).getDate() +
        "/" +
        new Date(data.start_date).getFullYear();
      data.end_date =
        this.calender.convertMonth(new Date(data.end_date).getMonth()) +
        "/" +
        new Date(data.end_date).getDate() +
        "/" +
        new Date(data.end_date).getFullYear();
      this.session = data;
      this.checkIfSessionAlreadyAdded();
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  // sessionClick(item: string) {
  //   console.log('Clicked', item);
  // }

  toggleFavorite() {
    if (this.isFavorite) {
      this.userProvider.removeChosenFavorite(this.session.id);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log("Clicked share session");
  }

  checkIfSessionAlreadyAdded() {
    this.userProvider.favorites.forEach((element: any) => {
      if (element.id == this.session.id) {
        this.showToast(this.session.title);
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    });
  }

  async showToast(title) {
    // Create a toast
    const toast = await this.toastCtrl.create({
      header: `${title} is added to prioritize!`,
      duration: 3000,
      buttons: [
        {
          text: "Close",
          role: "cancel",
        },
      ],
    });

    // Present the toast at the bottom of the page
    await toast.present();
  }

  // Kini siya nga function kay kuhaon niya ang tanan nga members sa usa ka group
  getAllMembers() {
    const currentUserID = this.request.getTheCurrentUserIdInStorage();
    currentUserID.then((id: any) => {
      const groupMembers = this.dataRequest.getAllMembersOfAGroup(id);
      groupMembers.subscribe((response: any) => {
        this.getMembersAttendance(response);
      });
    })
  }

  // Kini nga function kay ang pag kuha sa attendance sa certain member kung naka attend ba siya sa selected event
  getMembersAttendance(arrayOfMembers) {
    arrayOfMembers.forEach((member) => {
      const attendance = this.eventsAttendance.getMemberAttendance(member.id);
      attendance.subscribe((result: any) => {
        result[0].currentEventsAttendance.forEach((attendance) => {
          const eventDetails = this.eventsAttendance.getEventDetails(attendance.type)
          eventDetails.subscribe((result: any) => {
            if (
              (new Date(result[0].start_date).getMonth() + "-" + new Date(result[0].start_date).getDate() + "-" + new Date(result[0].start_date).getFullYear()) ==
              (new Date(this.session.start_date).getMonth() + "-" + new Date(this.session.start_date).getDate() + "-" + new Date(this.session.start_date).getFullYear())
            ) {
              if (this.session.title == result[0].title) {
                if (!this.members.includes(member)) {
                  this.members.push(member);
                  this.membersAttendance.push('Attended')
                }
              } else {
                this.members.push(member)
                this.membersAttendance.push("Didn't Attend")
              }
            } else {
              if (!this.members.includes(member)) {
                this.members.push(member)
                this.membersAttendance.push("Didn't Attend")
              }
            }
          })
        })
      })
    })
  }
}
