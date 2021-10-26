import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient,  HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  http: HttpClient;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {


  }

}

