import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';

import { PopoverController } from '@ionic/angular';
import { DashboardPopoverPage } from '../dashboard-popover/dashboard-popover.page';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  public rowCount = 0
  public currentTime = new Date();
  //Attendance of all the member users
  public allMembersAttendance = []
  //This will list all active and inactive members
  public active = []
  public inactive = []
  //This will list all the VIP and Regular members
  public vipMembers = [];
  public regularMembers = [];

  public lengthVIP;
  public lengthReg;

  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  public arrayOfCellgroup = [20, 100, 20, 20];
  public arrayOfSundayCeleb = [20, 60, 100, 20];

  private barChart: Chart;

  constructor(
    private dataRequest: DataRequestsService,
    private request: RequestsService,
    public popoverCtrl: PopoverController,
  ) {}

  ngOnInit() {
    this.getTheVipAndRegularMembers();
    this.userIsActiveOrNot();
    this.percentageOfMembersAttendance();
    var slides = document.querySelector("ion-slides");
    slides.options = {
      initialSlide: 1,
      speed: 400,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    };
    this.graphCreated(this.barCanvas, this.arrayOfCellgroup);
    this.graphCreated(this.lineCanvas, this.arrayOfSundayCeleb);
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: DashboardPopoverPage,
      event
    });
    await popover.present();
  }

  graphCreated(params, arrayForData) {
    this.barChart = new Chart(params.nativeElement, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "# of Votes",
            data: arrayForData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  //This is to know if the leader's member is Active or Inactive
  userIsActiveOrNot() {
    var partialDataHandler;
    this.dataRequest.getAllUsersId().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.dataRequest.getEventAndSCAttendance(element).subscribe(data => {
          this.classifyActiveAndInactive(element, data[0].currentUserAttendance);
        })
      })
    })
  }

  classifyActiveAndInactive(owner, users) {
    var counter = 0
    var dateToApproved = [];
    var toJudgeDate;
    var newDate;
    toJudgeDate = new Date(2021, this.currentTime.getMonth(), 0)
    for (let index = 0; index < 30; index++) {
      newDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth() - 1, index + 1)
      if(newDate.getDay() == 0) {
        dateToApproved.push(newDate)
      }
    }
    users.forEach(i => {
      dateToApproved.forEach(j => {
        if(new Date(i.date).getDate() == j.getDate()) {
          counter += 1
        }
      })
    })
    if(counter < 4 && counter > 0) {
      dateToApproved.length = 0
      for (let index = 0; index < this.currentTime.getDate(); index++) {
        newDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), index + 1)
        if(newDate.getDay() == 0) {
          dateToApproved.push(newDate)
        }
      }
      users.forEach(i => {
        dateToApproved.forEach(j => {
          if(new Date(i.date).getDate() == j.getDate()) {
            counter += 1
          }
        })
      })
    }
    if(counter >= 4) {
      this.dataRequest.addMemberToInactive({id: owner, boolean: true}).subscribe(result => {
        this.dataRequest.getTheCurrentUser({userID: result[0].userId}).subscribe(data => {
          this.active.push(data[0].firstname + " " + data[0].lastname)
        })
      })
    }else {
      this.dataRequest.addMemberToInactive({id: owner, boolean: false}).subscribe(result => {
        this.dataRequest.getTheCurrentUser({userID: result[0].userId}).subscribe(data => {
          this.inactive.push(data[0].firstname + " " + data[0].lastname)
        })
      })
    }
  }

  counter(i:number) {
    return new Array(i);
  }

  //This function will clarify if the leader's member is VIP or Regular Members
  getTheVipAndRegularMembers() {
    var partialDataHandler;
    var regularMembers;
    this.dataRequest.allVipUsers().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.vipMembers.push(element.firstname + " " + element.lastname)

        this.lengthVIP = this.vipMembers.length;
        console.log(this.lengthVIP);
        
      })
    })
    this.dataRequest.getRegularMembers().subscribe(result => {
      regularMembers = result
      regularMembers.forEach(element => {
        this.regularMembers.push(element.firstname + ' ' + element.lastname)

        this.lengthReg = this.regularMembers.length;
        console.log(this.lengthReg);
      });
    })
  }

  percentageOfMembersAttendance() {
    this.request.getTheCurrentUserIdInStorage().then(id => {
      this.dataRequest.getMemberSCAndEventsAttendance(id).subscribe(data => {
        console.log(data)
      })
    })
  }
}
