import {Component} from '@angular/core';
import {UsersComponent} from './components/users-container/users/users.component';
import {PostsComponent} from './components/posts-container/posts/posts.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    UsersComponent,
    PostsComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lessons';
  userId: number;

  getUserId(userId: number) {
    this.userId = userId
  }
}
