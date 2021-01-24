import { Component } from '@angular/core';

export interface Info {
  header: string;
  content: string[];
  link?: {
    linkText: string;
    linkHref: string;
  };
  borderClass: CSSStyleDeclaration['borderColor'];
  backgroundImagePath: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  info: Info[] = [
    {
      header: 'I am a Buyer',
      content: [
        'Find a lender, make offers, negotiate with sellers, and get to closing - all on one site!',
        'Save money on a house when sellers don\'t have to pay agent commissions',
      ],
      link: {
        linkText: 'BUY A HOME',
        linkHref: '/buyer',
      },
      borderClass: 'buyer-border',
      backgroundImagePath: 'assets/Image1_homepage_progressive.jpg',
    },
    {
      header: 'I am a Seller',
      content: [
        'Receive and sign offers',
        'Location professionals such as photographers, stagers, and contractors',
        'Pay only a small, flat fee at closing',
      ],
      link: {
        linkText: 'SELL A HOME',
        linkHref: '/seller',
      },
      borderClass: 'seller-border',
      backgroundImagePath: 'assets/Image2_homepage_progressive.jpg',
    },
    {
      header: 'Just Inquiring',
      content: [
        'Learn all about the home buying and selling process',
        'Find out how Aloha My Home can save you money when you are ready to buy or sell',
      ],
      link: {
        linkText: 'REQUEST INFORMATION',
        linkHref: '/info',
      },
      borderClass: 'inquiring-border',
      backgroundImagePath: 'assets/Image3_homepage_progressive.jpg',
    }
  ];
}
