import {Component, Input} from '@angular/core';
import {IPost} from '../../../interfaces/post.interface';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [
    NgIf
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost;
}
