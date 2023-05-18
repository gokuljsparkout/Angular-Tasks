import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-explorer',
  templateUrl: './topic-explorer.component.html',
  styleUrls: ['./topic-explorer.component.css'],
})
export class TopicExplorerComponent {
  title: string = 'Topic Components';
  color: string = 'blue';
  content1: string = 'Event Binding';
  twoData: string = '';

  numbers = [1, 2, 3, 4, 5, 6];

  onClick() {
    this.content1 = 'Event Binded';
  }
}
