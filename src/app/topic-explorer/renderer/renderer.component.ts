import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
})
export class RendererComponent {
  constructor(private renderer: Renderer2) {}
  @ViewChild('ColorInput') colorInput!: ElementRef;
  @ViewChild('TargetElement') target!: ElementRef;

  onSubmit() {
    const color = this.colorInput.nativeElement.value;
    this.renderer.setStyle(this.target.nativeElement, 'color', color);
  }
}
