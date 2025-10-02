import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.html',
  styleUrls: ['./summary.css']
})
export class Summary {
  constructor(public taskService: TaskService) {}
}
