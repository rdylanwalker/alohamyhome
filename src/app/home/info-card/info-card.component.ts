import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../home.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() info: Info;

  constructor() { }

  ngOnInit(): void {
  }

}
