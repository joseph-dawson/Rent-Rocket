import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  imagePath: string;

  constructor() {
    this.imagePath = '/assets/img/Welcome.png'
  }
}
