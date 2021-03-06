import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl ="http://127.0.0.1:8000/api/";

  keepTrackOnQs = 0;
  headers = {'content-type':'application/json'}

  constructor(private http:HttpClient) { }

  setKeepTrack(kT:number){
    this.keepTrackOnQs = kT;
  }

  getKeepTrack(){
    return this.keepTrackOnQs;
  }
  sendAnxietyA(answers){
    return this.http.post(this.APIurl + "anxietyCheck/", answers,{headers:this.headers})
  }

  //Function to get percentages per gender 
  getmeTheGPerc(){
    return this.http.get(this.APIurl + "genderAnxiety/", {headers:this.headers})
  }

  //Function to get percentages per age group 
  getmeTheAPerc(){
    return this.http.get(this.APIurl + "ageAnxiety/", {headers:this.headers})
  }
  //Function to get percentages overall 

  //Population percent for people with anxiety future prediction 

  //Gender percent for people with anxiety

}  