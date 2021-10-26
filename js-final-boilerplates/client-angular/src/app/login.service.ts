import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from './models/login';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {





  apiUrl: string = "http://localhost:3001/login";



  addLogin(model: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, model);
  }



  constructor(private http: HttpClient) { }
}
