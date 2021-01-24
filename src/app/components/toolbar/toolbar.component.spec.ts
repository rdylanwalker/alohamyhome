import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterLinkDirectiveStub } from '../../../testing/router-link-directive-stub';

import { ToolbarComponent } from './toolbar.component';

@Component({
  selector: 'app-center-button-dropdown',
  template: '<p>test menu<p>',
})
class CenterButtonDropdownStubComponent {}

describe('AppToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent, CenterButtonDropdownStubComponent, RouterLinkDirectiveStub ],
      imports: [ MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ToolbarComponent);
  });

  beforeEach(() => {
    component = fixture.componentInstance;
    component.navButtons = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a menu when a button is clicked and activate that button then close the menu', () => {
    component.navButtons = [
      {
        buttonText: 'Test',
        linkHref: '/',
      }
    ];

    expect(component.activeNavButton).toBe(undefined);

    component.onNavButtonClick(0);
    fixture.detectChanges();

    expect(component.activeNavButton).toBe(0);

    component.onCenterButtonMenuClose();
    fixture.detectChanges();

    expect(component.activeNavButton).toBe(undefined);
  });
});
