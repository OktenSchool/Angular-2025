import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/user.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  @Input()
  userId: number;

  user: IUser

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getById(this.userId).subscribe(value => this.user = value)
  }
}
