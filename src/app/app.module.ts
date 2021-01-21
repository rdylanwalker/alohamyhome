import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoCardComponent } from './home/info-card/info-card.component';
import { QuickCompareComponent } from './home/quick-compare/quick-compare.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CenterButtonDropdownComponent } from './toolbar/center-button-dropdown/center-button-dropdown.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
