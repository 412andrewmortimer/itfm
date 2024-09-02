import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'parknitro',
    loadChildren: () => import('parknitro/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'empiricalarchetype',
    loadChildren: () =>
      import('empiricalarchetype/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'getandrewmortimer',
    loadChildren: () =>
      import('getandrewmortimer/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
