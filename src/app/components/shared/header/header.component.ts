declare var require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private logoImage = require('./images/logo.png');
  private opened: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleOpenedCondition() {
    this.opened = !this.opened;
  }
}
