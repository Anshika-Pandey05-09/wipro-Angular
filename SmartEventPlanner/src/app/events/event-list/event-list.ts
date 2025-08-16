import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { Event} from '@angular/router';
import { EventsService } from '../events';

@Component({
  standalone:true,
  selector: 'app-event-list',
  imports: [UpperCasePipe,DatePipe,RouterLink,CommonModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  events: any[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => this.events = data);
  }

}
