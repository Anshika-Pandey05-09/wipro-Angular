import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Parent,CommonModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 users: any[] = [];

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  onSubmit() {
    console.log('Form submitted:', this.userForm.value);
    const newUser = this.userForm.value; // Get the form values
    this.users.push(newUser);  // Add new user to the list
    this.userForm.reset();  // This resets the form
  }
}
