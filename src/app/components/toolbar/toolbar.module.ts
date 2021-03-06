import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material.module';

import { CenterButtonDropdownComponent } from './center-button-dropdown/center-button-dropdown.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [
    CenterButtonDropdownComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
