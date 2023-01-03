import {Component, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {PicGalleryService} from './services/pic-gallery.service';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-tale-navigation',
  templateUrl: './tale-navigation.component.html',
  styleUrls: ['./tale-navigation.component.less']
})
export class TaleNavigationComponent {
  @Input()
  current: string = '';

  @Input()
  total: string = '';

  @Input()
  color: string = '';

  title: string = 'ВЫБРАТЬ ИСТОРИЮ';
  isNavigated: boolean = false;

  constructor(public readonly pictureGalleryService: PicGalleryService,
              private readonly overlay: Overlay,
              private readonly viewContainerRef: ViewContainerRef) {
  }

  openWithTemplate(tpl: TemplateRef<any>) {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });
    const overlayRef = this.overlay.create(configs);
    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  onClickBottomDigit(e: MouseEvent, tpl: TemplateRef<any>): void {
    e.stopPropagation();
    if (this.pictureGalleryService.visible) {
      this.pictureGalleryService.hide();
    } else {
      this.pictureGalleryService.show();
    }

    this.openWithTemplate(tpl);
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    if (this.pictureGalleryService.visible) {
      this.pictureGalleryService.hide();
    }
  }
}
