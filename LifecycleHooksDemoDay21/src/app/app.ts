import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleDemo } from './lifecycle-demo/lifecycle-demo';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LifecycleDemo,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LifecycleHooksDemoDay21');
}
