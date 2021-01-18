import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-menu',
  templateUrl: './sign-in-menu.component.html',
  styleUrls: ['./sign-in-menu.component.css']
})
export class SignInMenuComponent implements OnInit {
  passwordVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  togglePasswordVisibility(event: MouseEvent): void {
    this.stopPropagation(event);
    event.preventDefault();
    this.passwordVisible = !this.passwordVisible;
  }
}
