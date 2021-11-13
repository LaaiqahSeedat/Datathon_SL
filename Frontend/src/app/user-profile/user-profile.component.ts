import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  whatDisorder = "Nothing Picked";
  picked = 
    {
      Anxiety: false,
      Depression: false,
      Eating: false,
      Bipolar: false
    };
  
  Disorders:any = [
    {
      Name:"Anxiety Disorder",
      Description:"Disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
      From:"https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961",
      State:"Check"
    }
    ,
    {
      Name:"Depression Disorder",
      Description:"A mental health disorder characterised by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
      From:"https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007?utm_source=Google&utm_medium=abstract&utm_content=Major-depression&utm_campaign=Knowledge-panel",
      State:"Check"
    },
    {
      Name:"Eating Disorder",
      Description:"An eating disorder is a mental disorder defined by abnormal eating behaviors that negatively affect a person's physical or mental health",
      From:"https://en.wikipedia.org/wiki/Eating_disorder",
      State:"Check"
    },
    {
      Name:"Bipolar Disorder",
      Description:"A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.",
      From:"https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955?utm_source=Google&utm_medium=abstract&utm_content=Bipolar-disorder&utm_campaign=Knowledge-panel",
      State:"Check"
    },
    {
      Name:"Schizophrenia Disorder",
      Description:"A disorder that affects a person's ability to think, feel and behave clearly.",
      From:"https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443?utm_source=Google&utm_medium=abstract&utm_content=Schizophrenia&utm_campaign=Knowledge-panel",
      State:"Check"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  checkDisorder(disorder:string){
    
  }

}
