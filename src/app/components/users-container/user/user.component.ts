import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;

  @Output()
  lift=new EventEmitter<number>()

  setUserId(id: number) {
    this.lift.emit(id)
  }
}
