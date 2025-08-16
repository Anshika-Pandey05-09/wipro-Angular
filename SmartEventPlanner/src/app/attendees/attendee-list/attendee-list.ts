import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AttendeesService } from '../attendees';

@Component({
  standalone:true,
  selector: 'app-attendee-list',
  imports: [CommonModule],
  templateUrl: './attendee-list.html',
  styleUrl: './attendee-list.css'
})
export class AttendeeList implements OnInit{
  attendees: any[] = [];

  constructor(private attendeeService: AttendeesService) {}

  ngOnInit(): void {
    this.attendeeService.getAttendees().subscribe(data => this.attendees = data);
  }

}
