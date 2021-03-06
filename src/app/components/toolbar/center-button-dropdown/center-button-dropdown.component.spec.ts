import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterButtonDropdownComponent } from './center-button-dropdown.component';

describe('CenterButtonDropdownComponent', () => {
  let component: CenterButtonDropdownComponent;
  let fixture: ComponentFixture<CenterButtonDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterButtonDropdownComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
