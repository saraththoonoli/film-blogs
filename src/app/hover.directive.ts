import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
    @Input() highlightColor: string = 'red';
  
    constructor(private el: ElementRef) {}
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(color: string | null) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }

