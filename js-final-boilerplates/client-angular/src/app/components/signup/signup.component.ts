import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signups: Signup[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Signup[]>(this.dataPath).subscribe(signups =>{
      this.signups;
    });
  }

}
