import { Component, Input,OnChanges,OnDestroy,OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  imports: [],
  templateUrl: './lifecycle-demo.html',
  styleUrl: './lifecycle-demo.css'
})
export class LifecycleDemo {
  @Input() title !: string;

  constructor(){
    console.log('Constructor is invoked: Component instance is created..!!');
  }

  ngOnInit(): void {
    console.log('ngOnInit : Component is initialized..!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges : Input properties have changed..!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy : Cleanup is done!!');
  }

}
