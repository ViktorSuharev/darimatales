import {
  ComponentRef,
  Directive,
  HostListener,
  Input, OnDestroy, ViewContainerRef
} from '@angular/core';
import {TooltipComponent} from '../component/tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltip: string = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    if (this.componentRef === null) {
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
    }

    this.updateTooltipPosition(event);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.updateTooltipPosition(event)
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private updateTooltipPosition(event: MouseEvent) {
    if (this.componentRef !== null) {
      this.componentRef.instance.text = this.tooltip;
      this.componentRef.instance.left = event.clientX;
      this.componentRef.instance.top = event.clientY;
    }
  }
}
