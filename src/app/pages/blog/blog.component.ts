import { Component, OnInit } from '@angular/core';
import { PostModelRequest, PostModelResponse } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public posts = new Array<PostModelResponse>();

  constructor(public BlogService: BlogService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.BlogService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
