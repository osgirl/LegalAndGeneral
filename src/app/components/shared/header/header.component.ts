declare var require: any;
import { Component, OnInit } from '@angular/core';
import { FirstLevelItem } from './first-level-item';
import { FirstLevelItems } from './first-level-items-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoImage = require('./images/logo.png');
  isOpened: boolean = false;
  selectedItem: FirstLevelItem;
  isFirstLevelActive: boolean = false;

  firstLevelItems = FirstLevelItems;
  
  constructor() { }

  ngOnInit() {
  }

  toggleCondition() {
    this.isOpened = !this.isOpened;
  }

  onSelect(item: FirstLevelItem) {
    if (item == this.selectedItem)
      this.selectedItem = null;
    else 
      this.selectedItem = item;
  }
}
