import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { DataRequestsService } from '../../request-to-BE/data-requests.service';
import { RequestsService } from '../../logInAndSignupService/requests.service';

import { PopoverController } from '@ionic/angular';
import { DashboardPopoverPage } from '../dashboard-popover/dashboard-popover.page';
import { calendar } from '../../interfaces/user-options'

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  public whatWeek = 1
  public chosenMonth = this.calendar.convertMonth(new Date().getMonth())
  public chosenYear = new Date().getFullYear()
  public typeOfView = "VIP Member"
  public listAllTheMembers = []

  public typeOfViewChoices = ["Monthly", "Weekly", "Quarterly", "Yearly"];
  public typeOfViewChosed = 'Weekly'
  //These are the variables for quarterly view
  public quarterBool = false;
  public quarterMonths = [
    { months: ["Jan", "Feb", "Mar"], choices: "1st (Jan-Mar)" },
    { months: ["Apr", "May", "Jun"], choices: "2nd (Apr-Jun)" },
    { months: ["Jul", "Aug", "Sep"], choices: "3rd (Jul-Sep)" },
    { months: ["Oct", "Nov", "Dec"], choices: "4th (Oct-Dec)" }
  ]
  //These are the variables for monthly view
  public monthlyBool = false
  public monthlyView = this.calendar.returnAllMonthsChoices();
  //These are the variables for weekly view
  public weeklyBool = true
  public weeklyView = [
    {display: '1st', value: 1}, 
    {display: '2nd', value: 2},
    {display: '3rd', value: 3},
    {display: '4th', value: 4}
  ];
  //These are the variables for yearly view
  public yearlyBool = false
  public yearlyView = this.calendar.returnYearsFrom2005ToCurrentYear();

  //This is the default value
  public monthChosen = ["Jan", "Feb", "Mar", "Apr"];

  public currentTime = new Date();
  //This will list all active and inactive members
  public active = []
  public inactive = []

  //This will list the type of members
  public typeOfViewMember = this.calendar.returnTypeOfMember()

  public lengthVIP;

  @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;
  @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  public arrayOfCellgroup = [20, 100, 20, 20];
  public arrayOfSundayCeleb = [20, 60, 100, 20];

  public sample;

  public barChart: Chart;

  //This is the data to use for the stats
  public weeklyStats;
  public monthlyStats;

  public weekinaday;

  constructor(
    private dataRequest: DataRequestsService,
    private request: RequestsService,
    private popoverCtrl: PopoverController,

    public calendar: calendar
  ) { }

  ngOnInit() {
    this.request.getTheCurrentUserIdInStorage().then((id) => {
      this.dataRequest.getMemberSCAndEventsAttendance(id).subscribe((data) => {
        this.calendar.returnAttendance(data)
        this.weeklyStats = this.calendar.weekOfAMonth(data[0].currentUserAttendance)
      });
    });
    
    this.userIsActiveOrNot();
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
    const popOver = await this.popoverCtrl.create({
      component: DashboardPopoverPage,
      cssClass: 'my-custom-class',
      event: event,
      translucent: true
    });
    await popOver.present();
  }

  graphCreated(params, arrayForData) {
    this.barChart = new Chart(params.nativeElement, {
      type: "line",
      data: {
        labels: this.monthChosen,
        datasets: [
          {
            label: "Attendance Statistics (%)",
            data: arrayForData,
            backgroundColor: [
              "rgba(84, 216, 58, 0.4)"
                        ],
            borderColor: [
              "rgba(84, 216, 58, 1)"
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
      if (partialDataHandler.length == 0) {
        this.calendar.activeMember = [];
        this.calendar.inactiveMember = [];
      } else {
        partialDataHandler.forEach(element => {
          this.dataRequest.getEventAndSCAttendance(element).subscribe(data => {
            this.classifyActiveAndInactive(element, data[0].currentUserAttendance);
          })
        })
      }
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
      if (newDate.getDay() == 0) {
        dateToApproved.push(newDate)
      }
    }
    users.forEach(i => {
      dateToApproved.forEach(j => {
        if (new Date(i.date).getDate() == j.getDate()) {
          counter += 1
        }
      })
    })
    if (counter < 4 && counter > 0) {
      dateToApproved.length = 0
      for (let index = 0; index < this.currentTime.getDate(); index++) {
        newDate = new Date(this.currentTime.getFullYear(), this.currentTime.getMonth(), index + 1)
        if (newDate.getDay() == 0) {
          dateToApproved.push(newDate)
        }
      }
      users.forEach(i => {
        dateToApproved.forEach(j => {
          if (new Date(i.date).getDate() == j.getDate()) {
            counter += 1
          }
        })
      })
    }
    if (counter >= 4) {
      this.dataRequest.addMemberToInactive({ id: owner, boolean: true }).subscribe(result => {
        this.dataRequest.getTheCurrentUser({ userID: result[0].userId }).subscribe(data => {
          this.active.push(data[0].firstname + " " + data[0].lastname)
        })
      })
    } else {
      this.dataRequest.addMemberToInactive({ id: owner, boolean: false }).subscribe(result => {
        this.dataRequest.getTheCurrentUser({ userID: result[0].userId }).subscribe(data => {
          this.inactive.push(data[0].firstname + " " + data[0].lastname)
        })
      })
    }

  }

  counter(i: number) {
    return new Array(i);
  }

  //This function will return all VIP Members
  getTheVipMembers() {
    var arrayVipMembers = []
    var partialDataHandler;
    this.dataRequest.allVipUsers().subscribe(data => {
      partialDataHandler = data
      partialDataHandler.forEach(element => {
        arrayVipMembers.push(element.firstname + " " + element.lastname)
      })
    })
    return arrayVipMembers;
  }
  //This function will return all Regular Members 
  getTheRegularMembers() {
    var arrayRegularMembers = []
    var regularMembers;
    this.dataRequest.getRegularMembers().subscribe(result => {
      regularMembers = result
      regularMembers.forEach(element => {
        arrayRegularMembers.push(element.firstname + ' ' + element.lastname)
      });
    })
    return arrayRegularMembers;
  }

  //This function is used to select type of quarterly view (ex. "January to April")
  monthsToView(value) {
    this.whatWeek = value.target.value
    this.monthChosen.length = 0
    if (this.typeOfViewChosed == 'Quarterly') {
      this.monthChosen = value.target.value.months
      this.arrayOfCellgroup = this.calendar.getQuarterlyStats(this.calendar.membersAttendance.currentEventsAttendance, this.monthChosen, this.chosenYear);
      this.arrayOfSundayCeleb = this.calendar.getQuarterlyStats(this.calendar.membersAttendance.currentUserAttendance, this.monthChosen, this.chosenYear);
    } else if (this.typeOfViewChosed == 'Monthly') {
      this.monthChosen = this.calendar.returnAllWeeks();
      this.arrayOfCellgroup = this.calendar.getMonthlyStats(this.calendar.membersAttendance.currentEventsAttendance, value.target.value, this.chosenYear);
      this.arrayOfSundayCeleb = this.calendar.getMonthlyStats(this.calendar.membersAttendance.currentUserAttendance, value.target.value, this.chosenYear);
    } else if (this.typeOfViewChosed == 'Weekly') {
      this.monthChosen = this.calendar.returnAllDays();
      this.arrayOfSundayCeleb = this.calendar.getWeekOfMonth(this.calendar.membersAttendance.currentUserAttendance, this.whatWeek, this.chosenMonth + " " + this.chosenYear);
      this.arrayOfCellgroup = this.calendar.getWeekOfMonth(this.calendar.membersAttendance.currentEventsAttendance, this.whatWeek, this.chosenMonth + " " + this.chosenYear);
    } else {
      this.monthChosen = this.calendar.returnAllMonthsChoices();
      // this.arrayOfCellgroup = this.calendar.returnStatisticsForAYear();
      // this.arrayOfSundayCeleb = this.calendar.returnStatisticsForAYear()
    }
    this.graphCreated(this.barCanvas, this.arrayOfCellgroup);
    this.graphCreated(this.lineCanvas, this.arrayOfSundayCeleb); 
  }

  getMonth(value) {
    this.chosenMonth = value.target.value
    this.monthsToView({target: {value: this.whatWeek}})
  }

  getChosenYear(value) {
    this.chosenYear = value.target.value
    if(this.typeOfViewChosed == 'Quarterly') {
      this.monthsToView({target: {value: {months: ["Jan", "Feb", "Mar"]}}})
    }else {
      this.monthsToView({target: {value: this.whatWeek}})
    }
  }


  //["Monthly", "Weekly", "Quarterly", "Yearly"]
  getTheUserView(value) {
    this.typeOfViewChosed = value.target.value
    this.quarterBool = false
    this.monthlyBool = false
    this.weeklyBool = false
    if (value.target.value == 'Quarterly') {
      this.quarterBool = true
    } else if (value.target.value == 'Monthly') {
      this.monthlyBool = true
    } else if (value.target.value == 'Weekly') {
      this.weeklyBool = true
    } else {
      this.yearlyBool = true
    }
  }

  //This is to select the type of member (ex. VIP Member, Regular, Inactive, Active)
  selectMember(value) {
    this.typeOfView = value.target.value
    if (value.target.value == "VIP Member") {
      this.listAllTheMembers = this.getTheVipMembers()
    } else if (value.target.value == "Regular Member") {
      this.listAllTheMembers = this.getTheRegularMembers()
    } else if (value.target.value == "Inactive Member") {
      this.listAllTheMembers = this.inactive
    } else {
      this.listAllTheMembers = this.active
    }
  }
}
