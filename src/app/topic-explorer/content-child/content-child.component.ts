import { Component } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css'],
})
export class ContentChildComponent {
  message: string = 'Hello, From Content Child Component';
}
