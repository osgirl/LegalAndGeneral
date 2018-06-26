declare let require: any;

import { Component, OnInit } from '@angular/core';
import { BlogpostItemList } from './blogpost-item-list';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  blogpostItems = BlogpostItemList;

  constructor() { }

  ngOnInit() {
  }

  makeImagePath(imageName: string) {
    return require('./images/' + imageName);
  }

}
