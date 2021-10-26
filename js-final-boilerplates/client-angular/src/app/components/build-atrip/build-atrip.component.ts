import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-atrip',
  templateUrl: './build-atrip.component.html',
  styleUrls: ['./build-atrip.component.css']
})
export class BuildATripComponent implements OnInit {
  task: string;
  tasks = [];

  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  
}
  constructor() { }

  ngOnInit() {
  }

}

