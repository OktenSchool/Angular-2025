import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post.interface';
import {urls} from '../configs/urls';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getByUserId(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts.base, {params: {userId}})
  }
}
