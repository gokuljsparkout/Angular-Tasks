import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit,OnDestroy {
  timer: number = 10;
  ngOnInit() {
    setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }
    }, 1000);
    console.log('LifeCycle Component Created');
  }

  ngOnDestroy() {
    console.log('LifeCycle Component Destroyed');
  }
}
