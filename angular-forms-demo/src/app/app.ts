import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemplateForm,ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-forms-demo');
}
