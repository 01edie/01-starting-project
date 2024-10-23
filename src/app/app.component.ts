import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {  UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import type { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    console.log(id);
    const tmp = DUMMY_USERS.find((e) => e.id === id);
    if (tmp) {
      this.selectedUser = tmp;
    }
  }
}
