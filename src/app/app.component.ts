import {Component} from '@angular/core';
import {UsersComponent} from './components/users-container/users/users.component';

@Component({
  selector: 'app-root',
  imports: [
    UsersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lessons';
}
