import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/components/shared.service';

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.css']
})
export class AnxietyComponent implements OnInit {

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

    this.updateWeAt()
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }
  submitQ(){
    console.log('Age = ' + this.UserInput.age);
    console.log('CMT = ' + this.UserInput.CMT)
    console.log('AFT = ' + this.UserInput.AFT)
    console.log('TG = ' + this.UserInput.TG)
    console.log('Gender = ' + this.UserInput.Gender)  
    this.sService.sendAnxietyA(this.UserInput).subscribe((data:any)=>{
      console.log(data.Probability)
    })
  }

}