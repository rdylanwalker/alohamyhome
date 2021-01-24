import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthServiceStub } from '../../services/auth/auth.service.stub';
import { AuthService } from '../../services/auth/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const mockSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>(
    'RouterStateSnapshot',
    [ 'toString' ]
  );
  let guard: AuthGuard;
  let authService: AuthServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [ { provide: AuthService, useClass: AuthServiceStub } ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should check login and redirect when not logged in', () => {
    const result = guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    expect(result).not.toBeTrue();
  });

  it('should check login and continue when logged in', () => {
    authService.authEnabled = true;
    const result = guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    expect(result).toBeTrue();
  });
});
