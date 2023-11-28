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
    this.postService.getPosts().then(posts => {
      this.inactivePosts = posts.filter(post => post.active === false);
      console.log(this.inactivePosts);
      
    });
  }
}
