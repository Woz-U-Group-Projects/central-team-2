import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logins: Login[];
  model: Login = new Login();
  addForm: FormGroup;
  http: HttpClient;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

 login(form) {
    console.log(form.value);
    this.authService.login(form.value).subscribe((res) => {
      this.router.navigateByUrl('profile');
    });
  }

onsubmit() {
  this.router.navigate(['/profile']);
}
}



