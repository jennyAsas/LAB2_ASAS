import { Routes } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { Summary } from './summary/summary';

export const routes: Routes = [
  { path: 'form', component: TaskForm },
  { path: 'list', component: TaskList },
  { path: 'summary', component: Summary },
  { path: '', redirectTo: 'form', pathMatch: 'full' }
];
