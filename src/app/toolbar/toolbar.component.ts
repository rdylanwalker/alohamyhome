import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavButton } from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() navButtons: NavButton[];
  @Output() toggleSidenav = new EventEmitter<void>();
  activeNavButton: number | undefined = undefined;

  onNavButtonClick = (index: number): void => {
    this.activeNavButton = index;
  };

  onCenterButtonMenuClose = () => {
    this.activeNavButton = undefined;
  };
}
