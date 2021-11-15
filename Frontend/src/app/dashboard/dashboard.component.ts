import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { datacatalog_v1 } from 'googleapis';
import { SharedService } from '../components/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Impilo Van Data | SC21';

  //Gender

  //Age
  //Population

  populationDATA:any = [
    {
    "name":"Percentage",
    "series":[
      {
        "name":"2003",
        "value":50
      },
      {
        "name":"2004",
        "value":48
      },
      {
        "name":"2005",
        "value":58
      },
      {
        "name":"2006",
        "value":14
      },
    ]
    },

    {
      "name":"Future Prediction",
      "series":[
        {
          "name":"2006",
          "value":14
        },
        {
          "name":"2007",
          "value":18
        },
        {
          "name":"2008",
          "value":48
        },
        {
          "name":"2009",
          "value":58
        },
        {
          "name":"2010",
          "value":14
        },
      ]
      },
   
  ]
  
  moneyScheme:any = {
    domain: ['blue','lightblue']
  };

//Gender graph
  genderGraph:any = [
    {
    "name":"Male",
    "series":[]
    },
    {
    "name":"Female",
    "series":[]
    },
    {
      "name":"Male Predictions",
      "series":[]
    },
    {
      "name":"Female Predictions",
      "series":[]
    }
  ]
  
  genderScheme:any = {
    domain: ['blue','red','lightblue', 'pink']
  };

//Age graph 
ageLine:any = [
    {
    "name":"Ages 3-5",
    "series":[
      {
        "name":"2003",
        "value":50
      },
      {
        "name":"2004",
        "value":48
      },
      {
        "name":"2005",
        "value":58
      },
      {
        "name":"2006",
        "value":14
      },
    ]
    },
    {
      "name":"Ages 6-12",
      "series":[
        {
          "name":"2003",
          "value":75
        },
        {
          "name":"2004",
          "value":46
        },
        {
          "name":"2005",
          "value":20
        },
        {
          "name":"2006",
          "value":55
        },
      ]
      },
   
  ]
  
  ageScheme:any = {
    domain: ['blue','green','red','pink','brown','black','orange','indigo','violet']
  };



  constructor(private sShared: SharedService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {

    this.sShared.getmeTheGPerc().subscribe((data)=>{
      this.getGender(data)
      console.log(data)
      console.log(this.genderGraph)
    })
    //Populate the data for the graphs here 





      /* ----------==========    Overall Anxiety    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007'],
          series: [
              [12, 17, 7, 17, 23, 18, 38,92],
              [18, 99, 52, 32, 52, 18, 75, 65]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          scaleMinSpace: 20,
          low: 0,
          high: 150, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Age Anxiety   ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007'],
          series: [
              [23, 75, 45, 30, 80, 40, 20, 90],
              [40, 45, 45, 30, 80, 40, 20, 90],
              [60, 65, 45, 30, 80, 40, 20, 90],
              [80, 30, 45, 30, 80, 40, 20, 90],
              [95, 45, 45, 30, 80, 40, 20, 90],
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 150, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Gender Anxiety    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006','2007'],
        series: [
          [23, 75, 45, 30, 80, 40, 20, 90],
          [85, 55, 48, 30, 80, 40, 20, 90]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          scaleMinSpace: 30,
          low: 0,
          high: 150,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }


  getGender(data:any){
    for (let i = 0; i < data.length; i++) {
      
      this.genderGraph[0].series.push({
            "name":data[i].Year,
            "value":data[i].Percentage_Male
      })
      this.genderGraph[1].series.push({
        "name":data[i].Year,
        "value":data[i].Percentage_Female
      })
       
      console.log(this.genderGraph[0].series[i].name)
    }

    this.genderGraph = [...this.genderGraph]
  }

  getAgeRanges(){

  }

  getAges(){

  }

  

}
