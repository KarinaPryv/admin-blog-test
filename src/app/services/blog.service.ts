import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PostModelRequest, PostModelResponse } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = environment.backendUrl;
  private api = { posts: `${this.url}/posts` };

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<PostModelResponse[]> {
    return this.http.get<PostModelResponse[]>(this.api.posts);
  }

  createPost(post: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(this.api.posts, post);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.api.posts}/${postId}`);
  }

  updatePost(post: PostModelRequest, postId: number): Observable<PostModelResponse> {
    return this.http.patch<PostModelResponse>(`${this.api.posts}/${postId}`, post);
  }

}
