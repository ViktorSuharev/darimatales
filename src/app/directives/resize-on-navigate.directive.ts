import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

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

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'width', ResizeOnNavigateDirective.DEFAULT_SIZE.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', ResizeOnNavigateDirective.DEFAULT_SIZE.height);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'width', ResizeOnNavigateDirective.MAX_SIZE.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', ResizeOnNavigateDirective.MAX_SIZE.height);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'width', ResizeOnNavigateDirective.DEFAULT_SIZE.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', ResizeOnNavigateDirective.DEFAULT_SIZE.height);
  }
}
