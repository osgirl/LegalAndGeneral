import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent implements OnInit {
  @Input() secondLevelItems;
  @Input() text: string;
  isSecondLevelActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStateActive() {
    this.isSecondLevelActive = !this.isSecondLevelActive;
  }
  

}
