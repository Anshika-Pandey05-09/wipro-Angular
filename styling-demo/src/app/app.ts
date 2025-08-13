import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyledCard } from './styled-card/styled-card';

@Component({
  styles: [`
    .Inline {
      color: blue;
      font-weight: bold;
    }
  `],
  selector: 'app-root',
  imports: [RouterOutlet,StyledCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('styling-demo');
}
