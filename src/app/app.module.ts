import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoCardComponent } from './components/home/info-card/info-card.component';
import { QuickCompareComponent } from './components/home/quick-compare/quick-compare.component';
import { QuickLinksComponent } from './components/home/quick-links/quick-links.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CenterButtonDropdownComponent } from './components/toolbar/center-button-dropdown/center-button-dropdown.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    CenterButtonDropdownComponent,
    SignInComponent,
    InfoCardComponent,
    QuickCompareComponent,
    QuickLinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
