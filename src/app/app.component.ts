import { Component } from '@angular/core';

export interface NavButton {
  buttonText: string;
  linkHref: string;
  class?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navButtons: NavButton[] = [
    {
      buttonText: 'Buyer',
      linkHref: '/buyer',
    },
    {
      buttonText: 'Seller',
      linkHref: '/seller',
    },
    {
      buttonText: 'Tools & Resources',
      linkHref: '/tools',
    },
    {
      buttonText: 'Vendors & Contractors',
      linkHref: '/vendors',
    },
    {
      buttonText: 'FAQ',
      linkHref: '/faq',
    },
    {
      buttonText: 'Mortgage Calculator',
      linkHref: '/calculator',
      class: 'hide-gt-500',
    },
    {
      buttonText: 'Sign In',
      linkHref: '/signin',
      class: 'hide-gt-500',
    },
  ];
}
