declare let require: any;

import { Component, OnInit } from '@angular/core';
import { StepList } from './step-list';
import { StepItem } from './step-item';

@Component({
  selector: 'app-steps-block',
  templateUrl: './steps-block.component.html',
  styleUrls: ['./steps-block.component.scss']
})
export class StepsBlockComponent implements OnInit {
  stepList = StepList;
  stepPhotoHeaderPath = require("./images/step-photo.jpg");
  photoPathList = [
    require("./images/step-photo_1.jpg"),
    require("./images/step-photo_2.jpg"),
    require("./images/step-photo_3.jpg"),
    require("./images/step-photo_4.jpg"),
  ];
  activeStep: number;
  selectedItem: StepItem;
  constructor() { }

  ngOnInit() {
  }

  onSelect(item: StepItem, index: number) {
    this.selectedItem = item;
    this.activeStep = index;
  }
  closeItem(event: any) {
    event.stopPropagation();
    this.selectedItem = null;
  }

}
