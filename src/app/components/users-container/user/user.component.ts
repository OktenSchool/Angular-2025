import {Component, Input} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;
}
