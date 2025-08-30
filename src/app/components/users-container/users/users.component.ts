import {Component} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {UserComponent} from '../user/user.component';
import {NgForOf} from '@angular/common';
import {urls} from '../../../configs/urls';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-users',
  imports: [
    UserComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: IUser[]

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe(value => this.users = value)
  }
}
