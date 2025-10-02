import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card">
      <h2>Add Task</h2>
      <div class="form-group">
        <input [(ngModel)]="taskTitle" placeholder="Enter task" class="input" />
        <button (click)="addTask()" class="btn">Add</button>
      </div>
    </div>
  `,
})
export class TaskFormComponent {
  taskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
