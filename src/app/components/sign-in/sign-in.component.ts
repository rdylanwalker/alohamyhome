import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent {
  passwordVisible = false;

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.passwordVisible = !this.passwordVisible;
  }
}
