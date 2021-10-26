import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Signup } from './models/signup';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SignupService {

 //UNCOMMENT the appropriate apiUrl for the specific backend framework

  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3001
 apiUrl: string = "http://localhost:3001/signup";










  addSignup(model: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.apiUrl, model);
  }




constructor(private http: HttpClient) { }

}

