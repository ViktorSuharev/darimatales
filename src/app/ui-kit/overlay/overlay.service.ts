import {Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  public visible: boolean = false;

  constructor(private readonly overlay: Overlay) {
  }

  public open(template: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });
    const overlayRef = this.overlay.create(configs);
    overlayRef.attach(new TemplatePortal(template, viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }
}
