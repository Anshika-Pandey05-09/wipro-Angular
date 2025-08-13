import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements OnInit{
  dataservice = inject(DataService);
  posts: any[] = [];
ngOnInit(): void {
    this.dataservice.getPost().pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        throw error;
      })
    ).subscribe((todos) => {
      this.posts = todos;
    });
  }
}
