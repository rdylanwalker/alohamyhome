import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCompareComponent } from './quick-compare.component';

describe('QuickCompareComponent', () => {
  let component: QuickCompareComponent;
  let fixture: ComponentFixture<QuickCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
