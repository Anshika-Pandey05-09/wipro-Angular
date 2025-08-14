import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-destination-component',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './destination-component.html',
  styleUrl: './destination-component.css'
})
export class DestinationComponent {

}
