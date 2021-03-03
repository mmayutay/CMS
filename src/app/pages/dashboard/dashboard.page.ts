import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { DataRequestsService } from '../../request-to-BE/data-requests.service'

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  public currentTime = new Date();
  //Attendance of all the member users
  public allMembersAttendance = []
  //This will list all active and inactive members
  public active = []
  public inactive = []

  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  public arrayOfCellgroup = [20, 100, 20, 20];
  public arrayOfSundayCeleb = [20, 60, 100, 20];

  private barChart: Chart;

  constructor(
    private dataRequest: DataRequestsService
  ) {}

  ngOnInit() {
    this.userIsActiveOrNot();
    var slides = document.querySelector("ion-slides");
    slides.options = {
      initialSlide: 1,
      speed: 400,
    };
    this.graphCreated(this.barCanvas, this.arrayOfCellgroup);
    this.graphCreated(this.lineCanvas, this.arrayOfSundayCeleb);
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

  userIsActiveOrNot() {
    var partialDataHandler;
    this.dataRequest.getAllUsersId().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        this.dataRequest.getEventAndSCAttendance(element).subscribe(data => {
          this.allMembersAttendance.push({user: element, data: data[0].currentUserAttendance})
          this.getDefaultOffDays2(element, data[0].currentUserAttendance);
        })
      })
    })
  }

  getDefaultOffDays2(owner, users) {
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
          this.active.push(data[0])
        })
      })
    }else {
      this.dataRequest.addMemberToInactive({id: owner, boolean: false}).subscribe(result => {
        this.dataRequest.getTheCurrentUser({userID: result[0].userId}).subscribe(data => {
          this.inactive.push(data[0])
        })
      })
    }
  }
}
