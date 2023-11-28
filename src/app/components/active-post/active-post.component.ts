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
    this.postService.getPosts().then(posts => {
      this.activePosts = posts.filter(post => post.active === true);
      console.log(this.activePosts);
      
    });
  }
}
