declare let require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-block',
  templateUrl: './preview-block.component.html',
  styleUrls: ['./preview-block.component.scss']
})
export class PreviewBlockComponent implements OnInit {
  greetingImagePath = require('./images/greetings.png');
  
  constructor() { }
  
  ngOnInit() {
  }

}
