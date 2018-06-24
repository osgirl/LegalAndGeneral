declare var require: any;
import { Component, OnInit } from '@angular/core';
import { FirstLevelItem } from './first-level-item';

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

  firstLevelItems = [
    { text: 'First step' },
    {
      text: 'On your way',

      secondLevelItems: [
        {
          column: [
            { text: 'Explore your pension', isNavHeading: true },
            { text: 'Managing your pension pot' },
            { text: 'Reviewing your choices' },
            { text: 'Getting you pensions into one place' },
          ]
        },
        {
          column: [
            {
              text: 'Investing your pension pot',

              thirdLevelItems: [
                { text: 'Balancing risk and reward' },
                { text: 'Making your own investment choices' },
                { text: 'Your investment options' }
              ]
            }
          ]
        },

        {
          column: [
            {
              text: 'FAQ', isNavHeading: true,

              thirdLevelItems: [
                { text: 'How I can manage my pension savings' },
                { text: 'What I need to think about now' },
                { text: 'How to get my pensions in one place' },
                { text: 'Are my investments right for me' }
              ]
            }
          ]
        }
      ]
    },

    {
      text: 'Insurance',

      secondLevelItems: [
        {
          column: [
            { text: 'My insurance' },
            { text: 'Landlord insurance' },
            { text: 'Travel insurance' }
          ]
        },
        {
          column: [
            { text: 'Car insurance' },
            { text: 'Lifestyle insurance' },
            { text: 'Pet insurance' }
          ]
        },
        {
          column: [
            { text: 'Tenants insurance' },
            { text: 'Medicare insurance' },
            { text: 'DEFAQTO' }
          ]
        }
      ]
    },
    { text: 'Arriving' }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  toggleOpenedCondition() {
    this.isOpened = !this.isOpened;
  }

  onSelect(item: FirstLevelItem) {
    if (item == this.selectedItem)
      this.selectedItem = null;
    else 
      this.selectedItem = item;
  }
}
