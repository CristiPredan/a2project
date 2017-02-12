import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideShow]'
})
export class HideShowDirective {

  constructor() { }

  // @HostListener('click') onClick() {
  //   this.classList.toggle('not-visible');
  // }

}
