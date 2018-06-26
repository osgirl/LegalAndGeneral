import { FirstLevelItem } from './first-level-item';

export const FirstLevelItems: FirstLevelItem[] = [
    { text: 'Planning tools', routerLink: 'planning-tools' },
    {
      text: 'Options',
      routerLink: '#',
      secondLevelItems: [
        {
          column: [
            { text: 'Explore your pension', isNavHeading: true },
            { text: 'Managing your pension pot' },
            { text: 'Reviewing your choices' },
            { text: 'Getting you pensions into one place' },
            { text: 'Save your ' },
          ]
        },
        {
          column: [
            {
              text: 'Investing your pension pot',

              thirdLevelItems: [
                { text: 'Balancing risk and reward' },
                { text: 'Making your own investment choices' },
                { text: 'Your investment options' },
                { text: 'Bringing your pension savings together' }
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
                { text: 'How to get my pensions in one place' },
                { text: 'Which investment choices do I have' }
              ]
            }
          ]
        }
      ]
    },

    {
      text: 'Insurance',
      routerLink: '#',
      secondLevelItems: [
        {
          column: [
            { text: 'My insurance', isNavHeading: true },
            { text: 'Landlord insurance' },
            { text: 'Travel insurance' },
            { text: 'Pet insurance' },
            { text: 'Medicare insurance' }
          ]
        },
        {
          column: [
            { text: 'Car insurance' },
            { text: 'Lifestyle insurance' },
            { text: 'Home insurance' },
            { text: 'Pet insurance' },
            { text: 'Tenants insurance' },
          ]
        },
        {
          column: [
            { text: 'Make your plan', isNavHeading: true },
            { text: 'Choose from our three' },
            { text: 'Get a quote for insurance' },
            { text: 'Your insurance options' },
            { text: 'Ask a question' },
          ]
        }
      ]
    },
  { text: 'Blogpost', routerLink: 'blogpost' },
];