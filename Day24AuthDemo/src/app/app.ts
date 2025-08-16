import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './user/register/register';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day24AuthDemo');
}
