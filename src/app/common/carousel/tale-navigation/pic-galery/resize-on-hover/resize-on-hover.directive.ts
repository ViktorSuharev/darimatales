import {Directive, HostBinding, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[resize-on-hover]'
})
export class ResizeOnHoverDirective implements OnChanges {
  @Input()
  widthPx: number = 0;

  @Input()
  heightPx: number = 0;

  @Input()
  factor: number = 1;

  @HostBinding('style.width') elWidth: string = ResizeOnHoverDirective.px(this.widthPx);
  @HostBinding('style.height') elHeight: string = ResizeOnHoverDirective.px(this.heightPx);

  ngOnChanges() {
    this.elWidth = ResizeOnHoverDirective.px(this.widthPx);
    this.elHeight = ResizeOnHoverDirective.px(this.heightPx);
  }

  @HostListener('mouseenter') onEnter() {
    this.elWidth = ResizeOnHoverDirective.px(this.factor * this.widthPx);
    this.elHeight = ResizeOnHoverDirective.px(this.factor * this.heightPx);
  }

  @HostListener('mouseleave') onLeave() {
    this.elWidth = ResizeOnHoverDirective.px(this.widthPx);
    this.elHeight = ResizeOnHoverDirective.px(this.heightPx);
  }

  private static px(value: number): string {
    return `${value}px`;
  }
}
