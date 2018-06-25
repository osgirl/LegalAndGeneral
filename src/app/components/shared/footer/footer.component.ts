declare let require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logoImagePath = require('./images/logo_mini.png');
  
  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
