import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { InputFieldComponent } from './input-field/input-field.component';

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

  numbers: number[] = [1, 2, 3, 4, 5, 6];

  show: boolean = false;

  alphabets = ['A', 'B', 'C', 'D', 'E'];

  firstname: string = '';
  lastname: string = '';
  password: string = '';

  @ViewChild(InputFieldComponent) inputFieldComponent!: InputFieldComponent;

  onClick() {
    this.content1 = 'Event Binded';
  }

  onDeleteItem(deleted: string) {
    this.alphabets = this.alphabets.filter((alphabet) => alphabet !== deleted);
  }
  ngOnInit() {
    setInterval(() => (this.show = !this.show), 500);
  }
  onSubmit(event: { firstname: string; lastname: string }) {
    this.firstname = event.firstname;
    this.lastname = event.lastname;
  }

  accessChild() {
    this.password = this.inputFieldComponent.password;
  }
}
