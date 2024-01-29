import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[appBg]',
  standalone: true,
})
export class BgDirective {
  element = inject(ElementRef);

  constructor() {}

  ngOnInit() {
    this.element.nativeElement.style.color = '#6A6A6A';
  }
}
