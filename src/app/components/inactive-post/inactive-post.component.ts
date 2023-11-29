import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostComponent implements OnInit {
  inactivePosts: any = [];


  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.updatePost();
  }

  updatePost(): void {
    this.inactivePosts = this.postService.getPosts().filter(post => !post.active);
  }

  handlePostUpdate(event: { postId: number; active: boolean }): void {
    this.postService.updatePost(event.postId, event.active);
    this.updatePost();
  }
}
