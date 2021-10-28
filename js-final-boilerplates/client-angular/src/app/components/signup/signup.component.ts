import { Component, Input, OnInit } from '@angular/core';
import { HttpBackend, HttpClient,  HttpHeaders } from '@angular/common/http';
import { Signup } from '../../models/signup';

import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signups: Signup[];
  model: Signup = new Signup();
  addForm: FormGroup;
  http: HttpClient;
  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit() {}

  signup(form) {
    console.log(form.value);
    this.authService.signup(form.value).subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }
  onsubmit() {
    this.router.navigate(['/login']);
  }
  }
  





















