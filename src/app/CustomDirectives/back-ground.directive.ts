import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appBackGround]',
  standalone: true,
})
export class BackGroundDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#363636';
  }
}
