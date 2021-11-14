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
  ]

  constructor() { }

  ngOnInit() {
  }

  restartQuiz(){

    for (let i = 0; i < this.Disorders.length; i++) {
        this.Disorders[i].State = "Check"
    }

    this.picked.Anxiety = false
    this.picked.Depression =false
    this.picked.Eating = false
    this.picked.Bipolar = false

    this.whatDisorder = "Nothing Picked"
  }


  checkDisorder(disorder:string){
    this.switchScenes(disorder);
    this.changeButtonValue(disorder);
    this.resetOthers(disorder);
    this.whatDisorder = disorder
  }

  resetOthers(disorder:string){
    for (let i = 0; i < this.Disorders.length; i++) {
      if(this.Disorders[i].Name != disorder){
        this.Disorders[i].State = "Check"
      }
    }

    
  }

  changeButtonValue(disorder:string){
    switch (disorder){
      case "Anxiety Disorder":
          this.Disorders[0].State = "Checking"
        break;
      case "Depression Disorder":
          this.Disorders[1].State = "Checking"
        break;
      case "Eating Disorder":
          this.Disorders[2].State = "Checking"
        break;
      case "Bipolar Disorder":
          this.Disorders[3].State = "Checking"
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
