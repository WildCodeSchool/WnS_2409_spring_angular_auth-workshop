import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (route.data['userType'] === 'visitorOnly') {
    if (!authService.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  }

  if(route.data['userType'] === 'user') {
    if (authService.isLoggedIn()) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }

  if(route.data['userType'] === 'admin') {
    if (
      authService.isLoggedIn() &&
      authService
        .getUserRoles()
        ?.some((role: any) => role.authority === 'ROLE_ADMIN')
    ) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  }

  return true;
};
