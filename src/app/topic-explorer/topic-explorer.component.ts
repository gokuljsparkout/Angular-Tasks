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

  onClick() {
    this.content1 = 'Event Binded';
  }
}
