import {Directive, HostBinding, HostListener} from '@angular/core';

interface Rectangular {
  width: string;
  height: string;
}

@Directive({
  selector: '[appResizeOnNavigate]'
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

  @HostBinding('style.width') elWidth = null;
  @HostBinding('style.height') elHeight = null;

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
