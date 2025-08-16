import { Routes } from '@angular/router';
import { Register} from './user/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: '**', redirectTo: 'register' }
];