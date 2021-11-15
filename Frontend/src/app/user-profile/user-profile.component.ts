import { fadeInOut } from './../AnimationWorld/mrAnimate';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/components/shared.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [fadeInOut]
})
export class UserProfileComponent implements OnInit {
  anxietyFade = "In"
  whatDisorder = "Nothing Picked";
  QCount = 0
  picked = 
    {
      Anxiety: false,
      Depression: false,
      Eating: false,
      Bipolar: false
    };
  
    AnxietyInfo:any = [
    {
      Name:"Anxiety Disorder",
      Description:"",
      From:"",
      State:"Check"
    }

    
  ]
  AnxietyDescriptions=[
    {
      Description:"Disorder characterised by feelings of worry, anxiety or fear that are strong enough to interfere with one's daily activities.",
      From:"https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961"
    },
    {
      Description:"Toxic Anxity is everything from worry to panic attacks and paranoia",
      From:"https://www.headspace.com/articles/age-of-anxiety"
    }
  ]

  constructor(private sService: SharedService) { }

  ngOnInit() {

    this.AnxietyInfo[0].Description = this.AnxietyDescriptions[this.QCount].Description
    this.AnxietyInfo[0].From = this.AnxietyDescriptions[this.QCount].From
    setInterval(() =>{
      if(this.QCount != this.sService.getKeepTrack()){
         this.startSwift(this.sService.getKeepTrack());
      }
    },500);
  }
  startSwift(weAt: number) {
    this.QCount = weAt
  }

  restartQuiz(){
    this.anxietyFade = "Out"
    for (let i = 0; i < this.AnxietyInfo.length; i++) {
        this.AnxietyInfo[i].State = "Check"
    }
    setTimeout(() =>{
      this.picked.Anxiety = false
      this.picked.Depression =false
      this.picked.Eating = false
      this.picked.Bipolar = false
      this.whatDisorder = "Nothing Picked"
    },2000)

    
  }


  checkDisorder(disorder:string){
    
    this.switchScenes(disorder);
    this.changeButtonValue(disorder);
    this.resetOthers(disorder);
    this.whatDisorder = disorder
  }

  resetOthers(disorder:string){
    for (let i = 0; i < this.AnxietyInfo.length; i++) {
      if(this.AnxietyInfo[i].Name != disorder){
        this.AnxietyInfo[i].State = "Check"
      }
    }

    
  }

  changeButtonValue(disorder:string){
    switch (disorder){
      case "Anxiety Disorder":
          this.anxietyFade = "In"
          this.AnxietyInfo[0].State = "Checking"
        break;
      case "Depression Disorder":
          this.AnxietyInfo[1].State = "Checking"
        break;
      case "Eating Disorder":
          this.AnxietyInfo[2].State = "Checking"
        break;
      case "Bipolar Disorder":
          this.AnxietyInfo[3].State = "Checking"
        break;

      default:
        break;
    }
  }

  switchScenes(disorder:string){
    switch (disorder){
      case "Anxiety Disorder":
          this.picked.Anxiety = true
          this.picked.Depression =false
          this.picked.Eating = false
          this.picked.Bipolar = false
        break;
      case "Depression Disorder":
          this.picked.Anxiety = false
          this.picked.Depression =true
          this.picked.Eating = false
          this.picked.Bipolar = false
        break;
      case "Eating Disorder":
          this.picked.Anxiety = false
          this.picked.Depression =false
          this.picked.Eating = true
          this.picked.Bipolar = false
        break;
      case "Bipolar Disorder":
          this.picked.Anxiety = false
          this.picked.Depression =false
          this.picked.Eating = false
          this.picked.Bipolar = true
        break;

      default:
        break;
    }
  }

}
