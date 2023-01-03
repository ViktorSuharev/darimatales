import {Directive, HostBinding, HostListener} from '@angular/core';

interface Rectangular {
  width: string;
  height: string;
}

@Directive({
  selector: '[resize-on-hover]'
})
export class ResizeOnNavigateDirective {
  private static readonly DEFAULT_SIZE: Rectangular = {
    width: '80px',
    height: '50px'
  };
  private static readonly MAX_SIZE: Rectangular = {
    width: '160px',
    height: '100px'
  };

  @HostBinding('style.width') elWidth: string = '';
  @HostBinding('style.height') elHeight: string = '';

  constructor() {
    this.setRectangular(ResizeOnNavigateDirective.DEFAULT_SIZE);
  }

  @HostListener('mouseenter') onEnter() {
    this.setRectangular(ResizeOnNavigateDirective.MAX_SIZE);
  }

  @HostListener('mouseleave') onLeave() {
    this.setRectangular(ResizeOnNavigateDirective.DEFAULT_SIZE);
  }

  private setRectangular(obj: Rectangular) {
    this.elWidth = obj.width;
    this.elHeight = obj.height;
  }
}
