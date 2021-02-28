import { Component, Input } from '@angular/core';

import { Info } from '../home.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: [ './info-card.component.scss' ]
})
export class InfoCardComponent {
  @Input() info?: Info;
}
