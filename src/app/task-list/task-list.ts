import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { TaskService, Task } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  constructor(public taskService: TaskService) {}

  toggleCompletion(task: Task) {
    this.taskService.toggleTask(task.id);
  }
}
