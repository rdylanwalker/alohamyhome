import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material.module';

import { InfoCardComponent } from './info-card/info-card.component';
import { QuickCompareComponent } from './quick-compare/quick-compare.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    InfoCardComponent,
    QuickCompareComponent,
    QuickLinksComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
