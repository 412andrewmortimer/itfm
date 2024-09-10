import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouteStateService } from '../route/route-state.service';
import { getThemeForRoute } from './theme.utils';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: string;

  constructor(private router: Router, private routeStateService: RouteStateService) {
    // Default theme
    this.theme = 'sunset';

    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setThemeForRoute(event.urlAfterRedirects);
      });
  }

  private setThemeForRoute(route: string): void {
    const theme = getThemeForRoute(route);
    this.setTheme(theme);
  }

  setTheme(theme: string): void {
    this.theme = theme;
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }

  getTheme(): string {
    return this.theme;
  }
}