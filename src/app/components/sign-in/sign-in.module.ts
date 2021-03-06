import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material.module';

import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SignInRoutingModule,
  ],
  exports: [ SignInComponent ]
})
export class SignInModule { }
