import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {Tale} from '../../../tales/common/tale.model';
import {Router} from '@angular/router';
import {OverlayService} from '../../../ui-kit/overlay/overlay.service';
import {TaleService} from '../../../tales/common/tale.service';
import {CarouselService} from '../carousel.service';

@Component({
  selector: 'app-tale-navigation',
  templateUrl: './tale-navigation.component.html',
  styleUrls: ['./tale-navigation.component.less']
})
export class TaleNavigationComponent implements OnInit {
  public tales: Tale[] = [];

  public progress: number = 0;

  public _page: number = 0;

  @Input()
  set page(value: number) {
    if (value === 0) return;
    this._page = value;
    const emitter: EventEmitter<number> = this.carousel.start(value);
    emitter.subscribe(v => this.progress = v);
  }

  @Input()
  total: number = 0;

  @Input()
  color: string = '';

  title: string = 'ВЫБРАТЬ ИСТОРИЮ';
  isNavigated: boolean = false;

  constructor(public readonly overlayService: OverlayService,
              private readonly route: Router,
              private readonly viewContainerRef: ViewContainerRef,
              private readonly talesService: TaleService,
              private readonly carousel: CarouselService) {
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
    this.carousel.pause();
  }

  onSelect(tale: Tale) {
    this.carousel.stop();
    this.route.navigateByUrl(tale.url);
    this.overlayService.hide();
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    if (this.overlayService.visible) {
      this.overlayService.hide();
    }
    const emitter: EventEmitter<number> = this.carousel.start(this._page, this.progress);
    emitter.subscribe(v => this.progress = v);
  }

  private openWithTemplate(template: TemplateRef<any>) {
    this.overlayService.open(template, this.viewContainerRef)
  }
}
