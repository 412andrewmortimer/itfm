import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteStateService } from '@web/shared-services';


@Component({
  selector: 'web-global-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
     <div class="menu-nav">
      <div class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">Hello There</h1>
            <nav class="mt-4">
              <ul class="flex space-x-4">
                <li><a routerLink="/" class="btn btn-primary">Home</a></li>
                <li><a routerLink="/getandrewmortimer" class="btn btn-primary">Get Andrew Mortimer</a></li>
                <li><a routerLink="/empiricalarchetype" class="btn btn-primary">Empirical Archetype</a></li>
                <li><a routerLink="/parknitro" class="btn btn-primary">Park Nitro</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './global-nav.component.css',
})
export class GlobalNavComponent {
  currentRoute$ = this.routeStateService.currentRoute$;

  constructor(private routeStateService: RouteStateService) {}
}
