import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkDirectiveStub } from '../../../../testing/router-link-directive-stub';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardComponent, RouterLinkDirectiveStub ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    component.info = {
      header: 'Test',
      content: [ 'test content' ],
      borderClass: 'testBorderClass',
      backgroundImagePath: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
