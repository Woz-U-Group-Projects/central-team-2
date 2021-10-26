import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { id : 'string', username : 'string'};
  constructor(private http: HttpClient) { }

  callServer() {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3001', JSON.stringify(this.user), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);

    });
  }
}




