import { Component, OnInit } from '@angular/core';

export interface Info {
  header: string;
  content: string[];
  link?: {
    linkText: string;
    linkHref: string;
  };
  borderColor: CSSStyleDeclaration['borderColor'];
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
        'paragraph 1',
        'paragraph 2',
      ],
      link: {
        linkText: 'BUY A HOME',
        linkHref: '/buyer',
      },
      borderColor: 'lightblue'
    },
    {
      header: 'I am a Seller',
      content: [
        'paragraph 1',
        'paragraph 2',
      ],
      borderColor: 'lightgreen',
    },
    {
      header: 'Just Inquiring',
      content: [
        'paragraph 1',
        'paragraph 2',
      ],
      borderColor: 'lightsalmon',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
