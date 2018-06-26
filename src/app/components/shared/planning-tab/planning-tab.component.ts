declare let require: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-tab',
  templateUrl: './planning-tab.component.html',
  styleUrls: ['./planning-tab.component.scss']
})
export class PlanningTabComponent implements OnInit {
  piggyImage = require('./images/piggy-bank.png');
  
  constructor() { }

  ngOnInit() {
  }

}
