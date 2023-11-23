import { Directive,Input,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input() textColor: string = 'red';

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.changeTextColor(this.textColor || 'red');
  }

  private changeTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
