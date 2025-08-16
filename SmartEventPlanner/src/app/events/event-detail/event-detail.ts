import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events';
import { AttendeesService } from '../../attendees/attendees';

@Component({
  standalone:true,
  selector: 'app-event-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail implements OnInit{
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private attendeeService: AttendeesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe(data => this.event = data);
  }

  register(formValue: any) {
    const attendee = {
      name: formValue.name,
      email: formValue.email,
      eventId: this.event.id
    };
    this.attendeeService.addAttendee(attendee).subscribe(() => {
      alert('Registered Successfully!');
    });
  }

}
