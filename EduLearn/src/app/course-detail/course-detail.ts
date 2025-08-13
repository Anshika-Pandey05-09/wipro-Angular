import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-detail',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  @Input() course: Course | null = null;

}
