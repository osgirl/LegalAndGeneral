declare let require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {
  infoImagePath = require("./images/info.png");
  constructor() { }

  ngOnInit() {
  }

}
