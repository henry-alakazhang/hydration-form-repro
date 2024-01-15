import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>No form control</div>
    <input type="text" />

    <div>Form control</div>
    <input type="text" [formControl]="control" />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hydration-form-repro';

  control = new FormControl();
}
