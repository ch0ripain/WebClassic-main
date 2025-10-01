import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rutas de Home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => {
      return import('./pages/home/home').then((c) => c.Home);
    },
  },

  // Rutas de Autenticación (Auth)
  {
    path: 'auth/login',
    loadComponent: () => {
      return import('./pages/auth/login/login').then((c) => c.Login);
    },
  },
  {
    path: 'auth/sign-up',
    loadComponent: () => {
      return import('./pages/auth/sign-up/sign-up').then((c) => c.SignUp);
    },
  },
  {
    path: 'auth/recovery/reset-password',
    loadComponent: () =>
      import('./pages/auth/recovery/reset-password/reset-password').then(
        (c) => c.ResetPassword,
      ),
  },
  {
    path: 'auth/recovery/update-password',
    loadComponent: () => {
      return import(
        './pages/auth/recovery/update-password/update-password'
      ).then((c) => c.UpdatePassword);
    },
  },

  // Rutas de Soporte (Support)
  {
    path: 'support/report/send',
    loadComponent: () => {
      return import('./pages/support/report/send-report/send-report').then(
        (c) => c.SendReport,
      );
    },
  },
  {
    path: 'support/ticket/send',
    loadComponent: () => {
      return import('./pages/support/ticket/send-ticket/send-ticket').then(
        (c) => c.SendTicket,
      );
    },
  },

  // Rutas de Usuario (User)
  {
    path: 'user/:userId',
    loadComponent: () => {
      return import('./pages/user/profile/profile').then((c) => c.UserProfile);
    },
  },

  // Rutas de Compras (Premium)
  {
    path: 'premium/vip',
    loadComponent: () => {
      return import('./pages/premium/vip/vip').then((c) => c.Vip);
    },
  },

  //Ruta de Whitelist
  {
    path: 'whitelist',
    loadComponent: () => {
      return import('./pages/whitelist/whitelist').then((c) => c.Whitelist);
    },
  },

  // Ruta Error (404)
  {
    path: '**',
    loadComponent: () => {
      return import('./pages/404/error404').then((c) => c.Error404);
    },
  },
];
