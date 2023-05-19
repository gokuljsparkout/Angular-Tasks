import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css'],
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input()
  variable!: string;

  @Output() variableChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes' + this.variable);
  }

  ngOnInit() {
    console.log('Init' + this.variable);
  }

  onClickk() {
    this.variableChange.emit();
  }
}
