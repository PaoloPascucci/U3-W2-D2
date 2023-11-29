import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostComponent implements OnInit {
  activePosts: any = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.updatePost();
  }

  updatePost(): void {
    this.activePosts = this.postService
      .getPosts()
      .filter((post) => post.active);
  }

  handlePostUpdate(event: { postId: number; active: boolean }): void {
    this.postService.updatePost(event.postId, event.active);
    this.updatePost();
  }
}
