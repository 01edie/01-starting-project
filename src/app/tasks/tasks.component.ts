import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId)
  }

  closeAddTaskModal() {
    this.isAddingTask = false;
  }
  openAddTaskModal() {
    this.isAddingTask = true;
  }
  
}

// const dummyTasks = [
//   {
//     id: 't1',
//     userId: 'u1',
//     title: 'Master Angular',
//     summary:
//       'Learn all the basic and advanced features of Angular & how to apply them.',
//     dueDate: '2025-12-31',
//   },
//   {
//     id: 't2',
//     userId: 'u3',
//     title: 'Build first prototype',
//     summary: 'Build a first prototype of the online shop website',
//     dueDate: '2024-05-31',
//   },
//   {
//     id: 't3',
//     userId: 'u3',
//     title: 'Prepare issue template',
//     summary:
//       'Prepare and describe an issue template which will help with project management',
//     dueDate: '2024-06-15',
//   },
// ];
