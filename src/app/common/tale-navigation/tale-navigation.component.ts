import {Component, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Tale} from '../../model/tale.model';
import {Router} from '@angular/router';
import {OverlayService} from '../../ui-kit/overlay/overlay.service';

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
  currentPage: string = '';

  @Input()
  total: string = '';

  @Input()
  color: string = '';

  title: string = 'ВЫБРАТЬ ИСТОРИЮ';
  isNavigated: boolean = false;

  constructor(public readonly overlayService: OverlayService,
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

  private openWithTemplate(template: TemplateRef<any>) {
    this.overlayService.open(template, this.viewContainerRef)
  }
}
