import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClickcolor]',
})
export class ClickcolorDirective implements OnInit {
  colors: string[] = ['red', 'blue', 'green', 'pink', 'magenta', 'brown'];
  count: number = 0;
  @HostBinding('style.color') color: string = 'magent';
  @HostListener('click') mouseClick(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'color',
    //   'blue'
    // );
    setInterval(() => {
      this.color = this.colors[this.count];
      if (this.count !== this.colors.length) {
        this.count++;
      } else {
        this.count = 0;
        
      }
    }, 500);
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}
}
