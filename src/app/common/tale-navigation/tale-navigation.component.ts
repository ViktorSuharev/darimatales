import {Component, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {OverlayService} from '../overlay.service';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {Tale} from '../../model/tale.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tale-navigation',
  templateUrl: './tale-navigation.component.html',
  styleUrls: ['./tale-navigation.component.less']
})
export class TaleNavigationComponent {
  public readonly tales: Tale[] = [
    {title: 'белая змея', url: '/white-snake', image: 'url(\'/assets/center-pic-1.jpg\')'},
    {title: 'двадцать первый', url: '/twenty-fifth', image: 'url(\'/assets/twenty-fifth-background.jpg\')'},
    {title: 'безымянный ребенок', url: '/nameless-child', image: 'url(\'/assets/nameless-child-background.jpg\')'},
  ];

  @Input()
  current: string = '';

  @Input()
  total: string = '';

  @Input()
  color: string = '';

  title: string = 'ВЫБРАТЬ ИСТОРИЮ';
  isNavigated: boolean = false;

  constructor(public readonly overlayService: OverlayService,
              private readonly overlay: Overlay,
              private readonly route: Router,
              private readonly viewContainerRef: ViewContainerRef) {
  }

  onClickBottomDigit(e: MouseEvent, overlay: TemplateRef<any>): void {
    e.stopPropagation();
    if (this.overlayService.visible) {
      this.overlayService.hide();
    } else {
      this.overlayService.show();
    }

    this.openWithTemplate(overlay);
  }

  onSelect(tale: Tale) {
    this.route.navigateByUrl(tale.url);
    this.overlayService.hide();
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    if (this.overlayService.visible) {
      this.overlayService.hide();
    }
  }

  private openWithTemplate(overlay: TemplateRef<any>) {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });
    const overlayRef = this.overlay.create(configs);
    overlayRef.attach(new TemplatePortal(overlay, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
