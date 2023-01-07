import {Component, HostListener, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Tale} from '../../tales/common/tale.model';
import {Router} from '@angular/router';
import {OverlayService} from '../../ui-kit/overlay/overlay.service';
import {TaleService} from '../../tales/common/tale.service';

@Component({
  selector: 'app-tale-navigation',
  templateUrl: './tale-navigation.component.html',
  styleUrls: ['./tale-navigation.component.less']
})
export class TaleNavigationComponent implements OnInit {
  public tales: Tale[] = [];

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
              private readonly viewContainerRef: ViewContainerRef,
              private readonly talesService: TaleService) {
  }

  ngOnInit() {
    this.talesService.loadTales().subscribe(tales => this.tales = tales);
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
