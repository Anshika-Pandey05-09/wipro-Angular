import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://68a098d46e38a02c5819282c.mockapi.io/users/users'; // change if needed

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      catchError(() =>
        throwError(() => new Error('Registration failed. Please try again.'))
      )
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() =>
        throwError(() => new Error('Failed to fetch users.'))
      )
    );
  }
}