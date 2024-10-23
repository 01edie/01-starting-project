import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';

import type { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
  })
  user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input() name?: string;
  // @Input({ required: true }) id!: string;

  // @Output() select = new EventEmitter();
  select = output<string>();

  // signal inputs, readonly

  // avatar = input.required<string>();
  // name = input<string>();

  // image_path= computed(()=>'assets/users/'+this.avatar())

  get image_path() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
