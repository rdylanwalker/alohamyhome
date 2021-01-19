import { Component, OnInit } from '@angular/core';

export interface Info {
  header: string;
  content: string[];
  link?: {
    linkText: string;
    linkHref: string;
  };
  borderColor: CSSStyleDeclaration['borderColor'];
  backgroundImagePath: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      borderColor: '#A4BE59',
      backgroundImagePath: 'assets/Image1_homepage.jpg',
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
      borderColor: '#79EAEF',
      backgroundImagePath: 'assets/Image2_homepage.jpg',
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
      borderColor: '#E8865C',
      backgroundImagePath: 'assets/Image3_homepage.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
