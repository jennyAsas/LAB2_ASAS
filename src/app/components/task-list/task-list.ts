import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Task List</h2>
      <ul>
        <li *ngFor="let task of tasks">
          <input type="checkbox" [checked]="task.completed" (change)="toggleTask(task.id)" />
          <span [class.completed]="task.completed">{{ task.title }}</span>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
        color: #6b4226; /* darker brown */
      }
    `,
  ],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngDoCheck() {
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }
}
