import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input () childMessage!: string // recieving data from parent
  @Output() messageEvent = new EventEmitter<string>();  // sending events to parent


  sendMessage() {
    this.messageEvent.emit("Hello from Child...");  // emit payload to parent
  }

}
