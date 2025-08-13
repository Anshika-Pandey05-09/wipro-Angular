import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  message: string = '';

  receiveMessage(msg: string) {
    this.message = msg; // receiving data from child
  }

}
