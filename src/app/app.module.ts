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
import { SignInComponent } from './sign-in/sign-in.component';
import { InfoCardComponent } from './home/info-card/info-card.component';
import { QuickCompareComponent } from './home/quick-compare/quick-compare.component';
import { QuickLinksComponent } from './home/quick-links/quick-links.component';

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
