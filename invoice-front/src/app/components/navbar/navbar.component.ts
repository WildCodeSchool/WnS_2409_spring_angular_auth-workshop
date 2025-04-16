import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return (
      this.authService
        .getUserRoles()
        ?.some((role: any) => role.authority === 'ROLE_ADMIN') ?? false
    );
  }

  logout(): void {
    this.authService.clearToken();
    this.router.navigate(['/']);
  }
}
