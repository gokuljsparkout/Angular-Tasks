import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  updatedACount() {
    return this.counterService.inActiveToActiveCount;
  }
  updatedIACount() {
    return this.counterService.activeToInActiveCount;
  }

  constructor(private counterService: CounterService) {}
}
