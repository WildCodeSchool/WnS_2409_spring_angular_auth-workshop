import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { InvoicesListPageComponent } from './pages/invoices/invoices-list-page/invoices-list-page.component';
import { CreateInvoicePageComponent } from './pages/invoices/create-invoice-page/create-invoice-page.component';
import { AdminDashboardPageComponent } from './pages/admin/admin-dashboard-page/admin-dashboard-page.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [authGuard],
    data: {
      userType: 'visitorOnly',
    },
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [authGuard],
    data: {
      userType: 'visitorOnly',
    },
  },
  {
    path: 'invoices/create',
    component: CreateInvoicePageComponent,
    canActivate: [authGuard],
    data: {
      userType: 'user',
    },
  },
  {
    path: 'invoices',
    component: InvoicesListPageComponent,
    canActivate: [authGuard],
    data: {
      userType: 'user',
    },
  },
  {
    path: 'admin',
    component: AdminDashboardPageComponent,
    canActivate: [authGuard],
    data: {
      userType: 'admin',
    },
  },
];
