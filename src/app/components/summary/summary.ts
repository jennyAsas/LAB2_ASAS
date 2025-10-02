import { Component } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-summary',
  standalone: true,
  template: `
    <div class="card">
      <h2>Summary</h2>
      <p>
        Total tasks: <b>{{ taskService.getTotalTasks() }}</b>
      </p>
    </div>
  `,
})
export class SummaryComponent {
  constructor(public taskService: TaskService) {}
}
