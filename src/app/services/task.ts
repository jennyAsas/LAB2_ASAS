import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root', // makes it globally available
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  // Get all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Add new task
  addTask(title: string): void {
    this.tasks.push({ id: this.nextId++, title, completed: false });
  }

  // Toggle completed state
  toggleTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  // Count total tasks
  getTotalTasks(): number {
    return this.tasks.length;
  }
}
