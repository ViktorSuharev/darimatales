import {
  ApplicationRef,
  ComponentRef,
  Directive,
  EmbeddedViewRef,
  HostListener,
  Input, OnDestroy, ViewContainerRef
} from '@angular/core';
import {TooltipComponent} from '../component/tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltip = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    if (this.componentRef === null) {
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
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
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private updateTooltipPosition(event: MouseEvent) {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.left = event.clientX;
      this.componentRef.instance.top = event.clientY;
    }
  }
}
