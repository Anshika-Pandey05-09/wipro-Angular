import { Component } from '@angular/core';
import { LifecycleDemo } from '../lifecycle-demo/lifecycle-demo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [LifecycleDemo,NgIf],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentTitle = 'Hello from Parent Component';

  changeTitle() {
    this.parentTitle = 'Title Changed!';
  }

  removeChild = true;

}
