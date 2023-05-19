import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClickcolor]',
})
export class ClickcolorDirective implements OnInit {
  @HostListener('click') mouseClick(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'blue'
    );
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}
}
