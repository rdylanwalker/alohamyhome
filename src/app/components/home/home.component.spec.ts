import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent, Info } from './home.component';

@Component({
  selector: 'app-info-card',
  template: '',
})
class InfoCardStubComponent {
  @Input() info?: Info;
}

@Component({
  selector: 'app-quick-compare',
  template: '',
})
class QuickCompareStubComponent {}

@Component({
  selector: 'app-quick-links',
  template: '',
})
class QuickLinksStubComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, InfoCardStubComponent, QuickCompareStubComponent, QuickLinksStubComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
