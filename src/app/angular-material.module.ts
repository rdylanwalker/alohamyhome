import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const angularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
];


@NgModule({
  imports: [
    CommonModule,
    ...angularMaterialModules,
  ],
  exports: angularMaterialModules,
})
export class AngularMaterialModule { }
