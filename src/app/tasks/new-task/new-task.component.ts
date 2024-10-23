import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter();


  private tasksService = inject(TasksService)

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  closeModal() {
    this.close.emit();
  }
  
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    },this.userId)
    this.closeModal()
  }
}
