import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logins: Login[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Login[]>(this.dataPath).subscribe(logins =>{
      this.logins;
    });
  }

}
    


