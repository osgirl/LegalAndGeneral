declare var require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private logoImage = require('./images/logo.png');
  private piggyImage = require('./images/piggy-bank.png');
  constructor() { }

  ngOnInit() {
  }

}
