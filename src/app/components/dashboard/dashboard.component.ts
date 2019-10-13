import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard Version 2.0';
  subtitle = 'The Dashboard for Your Application';

  constructor() { }

  ngOnInit() {
  }

}
