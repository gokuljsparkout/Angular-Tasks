import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @ViewChild('FirstNameInput') FirstNameInput!: ElementRef;
  @ViewChild('LastNameInput') LastNameInput!: ElementRef;
  @Output() submitted = new EventEmitter<{
    firstname: string;
    lastname: string;
  }>();
  // constructor(private elementRef: ElementRef) {}

  password: string = 'ABC123';


  onSubmit() {
    this.submitted.emit({
      firstname: this.FirstNameInput.nativeElement.value,
      lastname: this.LastNameInput.nativeElement.value,
    });
  }
}
