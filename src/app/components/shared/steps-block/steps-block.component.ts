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
  selectedItem: StepItem;
  constructor() { }

  ngOnInit() {
  }

  onSelect(item: StepItem) {
    this.selectedItem = item;
  }
  closeItem(event: any) {
    event.stopPropagation();
    this.selectedItem = null;
  }

}
