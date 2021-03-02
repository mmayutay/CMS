import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild("barCanvas",  { static: true }) barCanvas: ElementRef;
  @ViewChild("lineCanvas", {static: true}) lineCanvas: ElementRef;

  public arrayOfCellgroup = [20, 100, 20, 20]
  public arrayOfSundayCeleb = [20, 60, 100, 20]

  private barChart: Chart;

  constructor() { }

  ngOnInit() {
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
              // "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 0
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

}