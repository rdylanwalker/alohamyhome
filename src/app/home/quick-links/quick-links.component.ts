import { Component, OnInit } from '@angular/core';

interface QuickLink {
  linkText: string;
  linkHref: string;
}

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  quickLinks: { [key: string]: QuickLink[] } = {
    'Heading 1': [
      {
        linkText: 'Link',
        linkHref: '/link',
      },
      {
        linkText: 'Link',
        linkHref: '/link',
      },
      {
        linkText: 'Link',
        linkHref: '/link',
      },
      {
        linkText: 'Link',
        linkHref: '/link',
      },
      {
        linkText: 'Link',
        linkHref: '/link',
      },
      {
        linkText: 'Link',
        linkHref: '/link',
      }
    ],
    'Heading 2': [
      {
        linkText: 'Link',
        linkHref: '/link',
      }
    ],
    'Heading 3': [
      {
        linkText: 'Link',
        linkHref: '/link',
      }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
