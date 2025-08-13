import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseList,CourseDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
title(title: any) {
    throw new Error('Method not implemented.');
  }
   selectedCourse: Course | null = null;

  onCourseSelected(course: Course) {
    this.selectedCourse = course;
  }
}
