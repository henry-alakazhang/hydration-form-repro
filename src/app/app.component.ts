import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-text',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class TextComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextComponent],
  template: `
    <app-text i18n>
      Before
      <br />
      After
    </app-text>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
