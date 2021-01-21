import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';

import { AppComponent } from './app.component';


@Component({
  selector: 'app-toolbar',
  template: '',
})
class ToolbarStubComponent {}

@Component({
  selector: 'app-footer',
  template: '',
})
class FooterStubComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'router-outlet',
  template: ''
})
class RouterOutletStubComponent {}


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ToolbarStubComponent, FooterStubComponent, RouterOutletStubComponent, RouterLinkDirectiveStub],
      imports: [MatSidenavModule, BrowserAnimationsModule, MatListModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
