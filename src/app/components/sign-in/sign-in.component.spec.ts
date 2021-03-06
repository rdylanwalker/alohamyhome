import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInComponent } from './sign-in.component';

describe('SignInMenuComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [ MatButtonModule, MatIconModule, MatInputModule, BrowserAnimationsModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    TestbedHarnessEnvironment.loader(fixture);
  });

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    const passwordElement: HTMLInputElement = fixture.nativeElement.querySelector('input[aria-label="password"]');
    const toggleButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[aria-label="toggle password visibility"]');

    expect(passwordElement.type).toEqual('password');
    toggleButton.click();
    fixture.detectChanges();

    expect(passwordElement.type).toEqual('text');
    expect(component.passwordVisible).toBeTrue();
  });
});
