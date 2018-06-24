import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html'
})
export class SubmenuComponent implements OnInit {
  @Input() secondLevelItems;
  @Input() text: string;
  selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: any) {
    if (item == this.selectedItem)
      this.selectedItem = null;
    else 
      this.selectedItem = item;
  }

}
