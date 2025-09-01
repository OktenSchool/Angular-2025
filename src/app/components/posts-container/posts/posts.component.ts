import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IPost} from '../../../interfaces/post.interface';
import {PostService} from '../../../services/post.service';
import {PostComponent} from '../post/post.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnChanges {
  @Input()
  userId: number;

  posts: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['userId']) {
      this.postService.getByUserId(this.userId).subscribe(value => this.posts = value)
    }
  }

}
