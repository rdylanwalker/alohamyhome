import {Component} from '@angular/core';

export interface NavButton {
  buttonText: string;
  linkHref: string;
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
      linkHref: '/venders',
    },
    {
      buttonText: 'FAQ',
      linkHref: '/faq',
    }
  ];
  activeNavButton: number | undefined = undefined;

  onNavButtonClick = (index: number): void => {
    this.activeNavButton = index;
  }
}
