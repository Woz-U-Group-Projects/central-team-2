import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Signup } from '../app/models/signup';
import { Login } from '../app/models/login'
import { Profile } from '../app/models/profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //UNCOMMENT the appropriate apiUrl for the specific backend framework

  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3001
 url: string = "http://localhost:3001/profile";

 getProfile(id: number): Observable<Profile[]>{
  return this.http.get<Profile[]>(this.url + "/" + id);
}

constructor(private http: HttpClient) { }
}
