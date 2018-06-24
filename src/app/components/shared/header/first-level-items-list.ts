import { FirstLevelItem } from './first-level-item';

export const FirstLevelItems: FirstLevelItem[] = [
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
              text: 'FAQ',

              thirdLevelItems: [
                { text: 'How I can manage my pension savings' },
                { text: 'What I need to think about now' },
                { text: 'How to get my pensions in one place' }
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
    { text: 'Arriving' },
];