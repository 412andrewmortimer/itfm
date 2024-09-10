import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouteStateService, ThemeService } from '@web/shared-services'

@Component({
  selector: 'web-root',
  template: `
    <div *ngIf="(currentRoute$ | async) === '/'">
      <div class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <nav class="mt-4">
              <ul class="flex space-x-4">
                <li><a routerLink="/" class="btn btn-primary">Home</a></li>
                <li><a routerLink="/parknitro" class="btn btn-primary">Parknitro</a></li>
                <li><a routerLink="/empiricalarchetype" class="btn btn-primary">Empiricalarchetype</a></li>
                <li><a routerLink="/getandrewmortimer" class="btn btn-primary">Getandrewmortimer</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent implements OnInit {
  currentRoute$ = this.routeStateService.currentRoute$;

  constructor(private routeStateService: RouteStateService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme('aqua');
  }
}