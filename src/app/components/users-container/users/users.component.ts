import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';
import {UserComponent} from '../user/user.component';
import {NgForOf, NgIf} from '@angular/common';
import {UserService} from '../../../services/user.service';
import {PostsComponent} from '../../posts-container/posts/posts.component';

@Component({
  selector: 'app-users',
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[]

  @Output()
  userId=new EventEmitter<number>()

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserId(liftData: number) {
    this.userId.emit(liftData)
  }
}
