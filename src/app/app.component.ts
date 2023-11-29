import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'U3-W2-D2';

  posts = [
    {
      id: 1,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'news',
    },
    {
      id: 2,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: false,
      type: 'politics',
    },
    {
      id: 3,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'educational',
    },
    {
      id: 4,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: false,
      type: 'news',
    },
    {
      id: 5,
      body: 'Quisque tellus leo, cursus id auctor sed, ornare sed velit. Proin vehicula pharetra tellus ut faucibus. Donec porttitor nunc eu ante elementum pellentesque. Cras vulputate quam id est placerat, id vestibulum nisi luctus.',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      active: true,
      type: 'educational',
    },
  ];
}
