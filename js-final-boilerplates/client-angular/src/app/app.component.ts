import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/'},
    { title: 'Trips', url: '/trips'},
    { title: 'POIs', url: '/pois'},
    { title: 'Favorites', url: '/favs'},
  ];
 
  constructor() {}
}
