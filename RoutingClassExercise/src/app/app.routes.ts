import { Routes } from '@angular/router';
//import { Book } from './features/books/books';
//import { Book } from './shared/models/book';
//import { Book } from './shared/models/book';
import { Books } from './features/books/books/books';

export const routes: Routes = [
  { path: '', component: Books },
  { path: '**', redirectTo: '' }
];