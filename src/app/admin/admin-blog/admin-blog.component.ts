import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModelRequest, PostModelResponse } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  public post = new PostModelRequest();
  public posts = new Array<PostModelResponse>();
  public editStatus = false;
  private editId!: number;

  constructor(public BlogService: BlogService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.BlogService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addNewPost(form: NgForm) {
    let newPost = new PostModelRequest();
    newPost.title = this.post.title;
    newPost.text = this.post.text;
    newPost.author = this.post.author;
    newPost.title = this.post.title;
    newPost.imgUrl = this.post.imgUrl;
    this.BlogService.createPost(newPost).subscribe(() => {
      this.getAllPosts();
    });
    form.reset();
  }

  deletePost(postId: number) {
    this.BlogService.deletePost(postId).subscribe(() => {
      this.getAllPosts();
    })
  }

  editPost(post: PostModelResponse) {
    this.post = { ...post };
    this.editStatus = true;
    this.editId = post.id;
  }

  saveEditedPost(form: NgForm) {
    let editedPost = new PostModelRequest();
    editedPost.title = this.post.title;
    editedPost.text = this.post.text;
    editedPost.author = this.post.author;
    editedPost.title = this.post.title;
    editedPost.imgUrl = this.post.imgUrl;
    this.BlogService.updatePost(editedPost, this.editId).subscribe(() => {
      this.getAllPosts();
    });
    this.editStatus = false;
    form.reset();
  }

}
