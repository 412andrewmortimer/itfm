import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouteStateService, ThemeService } from '@web/shared-services'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { GlobalNavComponent } from '@web/shared-ui';

@Component({
  selector: 'web-root',
  template: `
    <web-global-nav></web-global-nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule, GlobalNavComponent],
})
export class AppComponent implements OnInit {
  currentRoute$ = this.routeStateService.currentRoute$;

  constructor(private routeStateService: RouteStateService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme('synthwave');
  }
}