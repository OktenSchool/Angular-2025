import {Component, Input} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';
import {NgIf} from '@angular/common';
import {PostsComponent} from '../../posts-container/posts/posts.component';

@Component({
  selector: 'app-user',
  imports: [
    NgIf,
    PostsComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;

  userId: number

  setUserId(id: number) {
    this.userId = id
  }
}
