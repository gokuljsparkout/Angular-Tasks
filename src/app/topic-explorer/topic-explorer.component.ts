import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-explorer',
  templateUrl: './topic-explorer.component.html',
  styleUrls: ['./topic-explorer.component.css'],
})
export class TopicExplorerComponent implements OnInit {
  title: string = 'Topic Components';
  color: string = 'blue';
  content1: string = 'Event Binding';
  twoData: string = '';

  numbers = [1, 2, 3, 4, 5, 6];

  show: boolean = false;

  onClick() {
    this.content1 = 'Event Binded';
  }

  ngOnInit() {
    setInterval(() => (this.show = !this.show), 500);
  }
}
