import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@web/shared-ui').then(m => m.HomeComponent),
  },
  {
    path: 'parknitro',
    loadChildren: () => import('parknitro/Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'empiricalarchetype',
    loadChildren: () => import('empiricalarchetype/Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'getandrewmortimer',
    loadChildren: () => import('getandrewmortimer/Routes').then(m => m.remoteRoutes),
  },
];