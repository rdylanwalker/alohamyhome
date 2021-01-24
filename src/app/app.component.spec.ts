import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';

import { AppComponent, NavButton } from './app.component';
import { AuthServiceStub } from './services/auth/auth.service.stub';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-toolbar',
  template: '',
})
class ToolbarStubComponent {
  @Input() navButtons: NavButton[];
}

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
  let authService: AuthServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ToolbarStubComponent, FooterStubComponent, RouterOutletStubComponent, RouterLinkDirectiveStub ],
      imports: [ MatSidenavModule, BrowserAnimationsModule, MatListModule ],
      providers: [ { provide: AuthService, useClass: AuthServiceStub } ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    authService = TestBed.inject(AuthService);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not add login nav option if not allowed', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance.navButtons.length).toBe(6);
  });

  it('should add login nav option if allowed', () => {
    authService.authEnabled = true;
    fixture.detectChanges();

    expect(fixture.componentInstance.navButtons.length).toBe(7);
  });
});
