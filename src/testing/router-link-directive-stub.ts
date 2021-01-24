import { Directive, HostListener, Input } from '@angular/core';
import { NgModule } from '@angular/core';

export { RouterLink } from '@angular/router';

/* eslint-disable @angular-eslint/directive-class-suffix, @angular-eslint/directive-selector */
@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  @Input('routerLinkActiveOptions') activeRouteOptions: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick(): void {
    this.navigatedTo = this.linkParams;
  }
}

/// Dummy module to satisfy Angular Language service. Never used.

@NgModule({
  declarations: [
    RouterLinkDirectiveStub
  ]
})
export class RouterStubsModule {}
