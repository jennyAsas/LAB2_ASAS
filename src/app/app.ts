import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form';
import { TaskListComponent } from './components/task-list/task-list';
import { SummaryComponent } from './components/summary/summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent, SummaryComponent],
  template: `
    <div class="container">
      <h1>Task Manager</h1>
      <app-task-form></app-task-form>
      <app-task-list></app-task-list>
      <app-summary></app-summary>
    </div>
  `,
})
export class App {}
