declare let require: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-tools',
  templateUrl: './planning-tools.component.html',
  styleUrls: ['./planning-tools.component.scss']
})
export class PlanningToolsComponent implements OnInit {
  piggyImage = require('./images/piggy-bank.png');
  
  constructor() { }

  ngOnInit() {
  }

}
