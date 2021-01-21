import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  passwordVisible = false;

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  togglePasswordVisibility(event: MouseEvent): void {
    this.stopPropagation(event);
    event.preventDefault();
    this.passwordVisible = !this.passwordVisible;
  }
}
