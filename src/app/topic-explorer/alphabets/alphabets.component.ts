import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css'],
})
export class AlphabetsComponent {
  @Input() alphabet: any;
  @Output() deleteItem = new EventEmitter<string>();

  onClick() {
    this.deleteItem.emit(this.alphabet);
  }
}
