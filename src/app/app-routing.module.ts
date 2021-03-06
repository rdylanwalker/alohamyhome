import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
