import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CenterButtonDropdownComponent } from './toolbar/center-button-dropdown/center-button-dropdown.component';
import { SignInMenuComponent } from './toolbar/sign-in-menu/sign-in-menu.component';
import { InfoCardComponent } from './home/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    CenterButtonDropdownComponent,
    SignInMenuComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
