import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dropdown-content',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class DropdownContentComponent {}

@Component({
  selector: 'app-dropdown-trigger',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class DropdownTriggerComponent {}

@Component({
  selector: 'app-dropdown',
  template: `
    <ng-content select="app-dropdown-trigger"></ng-content>
    <!-- this would normally be dynamic -->
    @if(false) {
    <ng-content select="app-dropdown-content"></ng-content>
    }
  `,
  standalone: true,
})
export class DropdownComponent {}

@Component({
  imports: [
    DropdownComponent,
    DropdownContentComponent,
    DropdownTriggerComponent,
  ],
  selector: 'app-extras-menu',
  template: `<app-dropdown>
    <app-dropdown-trigger>More</app-dropdown-trigger>
    <app-dropdown-content>
      <ng-content />
    </app-dropdown-content>
  </app-dropdown>`,
  standalone: true,
})
export class ExtrasMenuComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ExtrasMenuComponent,
    DropdownComponent,
    DropdownTriggerComponent,
    DropdownContentComponent,
  ],
  template: `
    <!-- this is fine -->
    <app-dropdown>
      <app-dropdown-trigger>Dropdown Trigger</app-dropdown-trigger>
      <app-dropdown-content>Dropdown Content</app-dropdown-content>
    </app-dropdown>

    <!-- this breaks -->
    <app-extras-menu>Menu Content</app-extras-menu>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
