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
<<<<<<< HEAD

  numbers = [1, 2, 3, 4, 5, 6];
=======
>>>>>>> fda4571b549ae907453f0e5bc9446294ebd8b3f7

  onClick() {
    this.content1 = 'Event Binded';
  }
}
