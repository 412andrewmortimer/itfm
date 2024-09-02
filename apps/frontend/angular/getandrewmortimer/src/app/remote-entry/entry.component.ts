import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, NavigationComponent } from '@web/shared-ui';

@Component({
  selector: 'web-getandrewmortimer-entry',
  template: `
    <web-navigation [siteTitle]="siteTitle" [menuItems]="dynamicMenuItems" >
      <ng-template let-menuItem ngFor [ngForOf]="dynamicMenuItems">
        <li><a>{{ menuItem }}</a></li>
      </ng-template>
    </web-navigation>
    <web-home [heroContentTemplate]="heroTemplate">
      <ng-template #heroTemplate>
        <h1 class="mb-5 text-5xl font-bold">Andrew Mortimer</h1>
        <p class="mb-5">Expert Web Architect</p>
        <button class="btn btn-primary">Say Hi</button>
      </ng-template>
    </web-home>`,
  standalone: true,
  imports: [CommonModule, HomeComponent, NavigationComponent],
})
export class RemoteEntryComponent {
  dynamicMenuItems: string[]|undefined;
  siteTitle: string|undefined;
  constructor() {
    this.dynamicMenuItems = ['Home', 'Blog', 'Contact'];
    this.siteTitle = 'Get Andrew Mortimer';
  }
}
