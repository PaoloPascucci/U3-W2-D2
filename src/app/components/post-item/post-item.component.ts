import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-item',
  template: `
  <div class="card mt-4" [ngClass]="{'bg-warning': post.type === 'news', 'bg-dark text-white': post.type === 'politics', 'bg-info': post.type === 'educational'}">
  <div class="card-header">Post n{{post.id}} </div>
        <div class="card-body">
            <h4 class="card-title">{{post.title}}</h4>
            <p class="card-text">{{post.body}}</p>
    <button class="btn btn-primary" (click)="updatePost(!post.active)">
      {{ post.active ? 'Disattiva' : 'Attiva' }}
    </button>
  </div>
`,
})
export class PostItemComponent {
  @Input() post: any;
  @Output() update = new EventEmitter<{ postId: number; active: boolean }>();

  updatePost(active: boolean): void {
    this.update.emit({ postId: this.post.id, active });
  }
}
