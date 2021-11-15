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
<<<<<<< HEAD
  title = 'Impilo Van Data | SC21 ';
=======
>>>>>>> main

  //Gender

  //Age
  //Population

  overalAnxiety:any = []
  
  moneyScheme:any = {
    domain: ['blue','lightblue']
  };
  percGScheme:any = {
    domain: ['skyblue','magenta']
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
<<<<<<< HEAD
      "series":[
        {
          "name":"2005",
          "value":22
        },
        {
          "name":"2006",
          "value":22
        },
        {
          "name":"2007",
          "value":22
        },
        {
          "name":"2008",
          "value":22
        },
        {
          "name":"2009",
          "value":22
        },
        {
          "name":"2010",
          "value":14
        },
        {
          "name":"2011",
          "value":22
        },
        {
          "name":"2012",
          "value":22
        },
        {
          "name":"2013",
          "value":22
        },
        {
          "name":"2014",
          "value":22
        },
        {
          "name":"2015",
          "value":14
        },
        {
          "name":"2016",
          "value":22
        },
        {
          "name":"2017",
          "value":22
        },
        {
          "name":"2018",
          "value":22
        },
        {
          "name":"2019",
          "value":22
        },
    
    
    
      ]
      },
         {
=======
      "series":[]
    },
    {
>>>>>>> main
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
    "name":"Ages < 5",
    "series":[]
    },
    {
      "name":"Ages 5-14",
      "series":[]
    },
    {
      "name":"Ages 15-49",
      "series":[]
    },
    {
      "name":"Ages 50-69",
      "series":[]
    },
    {
      "name":"Ages > 70",
      "series":[]
    }
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
    })
    this.sShared.getmeTheAPerc().subscribe((data)=>{
      this.getAgeRanges(data)
    })
  }


  getGender(data:any){
    for (let i = 0; i < data.length; i++) {
      
      this.genderGraph[0].series.push({
            "name":data[i].Year + "",
            "value":data[i].Percentage_Male
      })
      this.genderGraph[1].series.push({
            "name":data[i].Year + "",
            "value":data[i].Percentage_Female
      })
      this.overalAnxiety.push({
        "name":data[i].Year + "",
        "value":data[i].Total_Percentage
      })
    }

    this.genderGraph = [...this.genderGraph]
    this.overalAnxiety = [...this.overalAnxiety]
  }

  getAgeRanges(data:any){
    for (let i = 0; i < data.length; i++) {
      
      this.ageLine[0].series.push({
            "name":data[i].Year + "",
            "value":data[i].UnderFive
      })
      this.ageLine[1].series.push({
            "name":data[i].Year + "",
            "value":data[i].FiveToFourteen
      })
      this.ageLine[2].series.push({
        "name":data[i].Year + "",
        "value":data[i].FifteenToFourtyNine
      })
      this.ageLine[3].series.push({
        "name":data[i].Year + "",
        "value":data[i].FiftyToSixtynine
      })
      this.ageLine[4].series.push({
        "name":data[i].Year + "",
        "value":data[i].OverSeventy
      })

    }

    this.ageLine = [...this.ageLine]
  }

  getAges(){

  }



}
