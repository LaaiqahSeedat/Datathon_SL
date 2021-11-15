import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/components/shared.service';

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.css']
})
export class AnxietyComponent implements OnInit {
    anxiety:number = -1
    submitted = false;
    done = false;

    UserInput:any = {
    age:null,
    EducationLevel:null,
    Gender:null,
    HasFamilyHistory:null,
    Occupation:null,
    ATF:0,
    EAF:0,
    TKF:0,
    CMT:0,
  	DEF:0, 
    SMF:0,
    ERF:0,
    DAF:0,
    HR:null,
    SW:null,  
    TR:null,
    DR:null,
    BR:null,
    CK:null,
    CP:null,
    NS:null,
    DZ:null,
    UR:null,
    UB:null,
    MD:null,
    TG:null
  }

  notFirst:boolean= false;
  listQuestions:boolean[]=[true, false, false, false, false, false, false,false,false]
  ResultColorScheme:any = {
    domain: ['#8B008B']
  };
  AccuracyData:any =[
    {"name":"Accuracy", "value":80+"%"}
  ]
  weAt = 0;
  process="Next";
  constructor(private sService:SharedService) { }

  ngOnInit(): void {
    this.updateWeAt()
    
    console.log(this.listQuestions[1])
  }

  updateWeAt(){
    for (let i = 0; i < this.listQuestions.length; i++) {
      if(i != this.weAt){
        this.listQuestions[i] = false
      }else{
        this.listQuestions[i] = true
      }
    }
  }

  next(){
    this.weAt++;
    this.notFirst = true
    if(this.weAt == 8){
      this.process = "Submit"
    }else if(this.weAt < 8){
      this.process = "Next"
    }

    if(this.weAt >= 9){
      this.submitQ()
      this.weAt = 8
    }
    this.updateWeAt()
  }

  previous(){
    this.weAt--;

    if(this.weAt <= 0){
      this.weAt = 0
      this.notFirst= false
    }

    if(this.weAt < 8){
      this.process = "Next"
    }
    
    this.sService.setKeepTrack(this.weAt);

    this.updateWeAt()
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }
  submitQ(){
    this.submitted = true
    console.log('Age = ' + this.UserInput.age);
    console.log('CMT = ' + this.UserInput.CMT)
    console.log('AFT = ' + this.UserInput.AFT)
    console.log('TG = ' + this.UserInput.TG)
    console.log('Gender = ' + this.UserInput.Gender)  
    this.sService.sendAnxietyA(this.UserInput).subscribe((data:any)=>{
      setTimeout(()=>{
        this.showResults(data)
      },3000) 
    })
  }

  showResults(data){
    this.listQuestions[this.listQuestions.length-1] = false;
    this.anxiety = data.Probability
    
    this.AccuracyData[0].value = data.Anxiety
    this.AccuracyData = [...this.AccuracyData]

    console.log(this.anxiety)
    this.done = true;

    setTimeout(() =>{
      this.AccuracyData[0].value = this.AccuracyData[0].value + "%"
      this.AccuracyData = [...this.AccuracyData]
    },3500)
    
  }

}
