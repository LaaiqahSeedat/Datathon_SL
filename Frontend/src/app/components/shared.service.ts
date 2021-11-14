import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIurl ="http://127.0.0.1:8000/api/";

  headers = {'content-type':'application/json'}

  constructor(private http:HttpClient) { }

  sendAnxietyA(answers){
    return this.http.post(this.APIurl + "anxietyCheck/", answers,{headers:this.headers})
  }

}  