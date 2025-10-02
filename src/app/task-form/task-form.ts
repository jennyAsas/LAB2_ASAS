import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskForm {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
    }
  }
}
