import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet],
  template: `
    <div>No form control</div>
    <input type="text" />

    <div>Form control</div>
    <input type="text" [formControl]="control" />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hydration-form-repro-17';

  control = new FormControl();
}
