import {Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output} from '@angular/core';
import {Tale} from '../../../tales/common/tale.model';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.less']
})
export class PicGalleryComponent implements OnChanges {

  @Input()
  tales: Tale[] = [];

  @Output()
  select: EventEmitter<Tale> = new EventEmitter<Tale>();

  widthPx: number = 160;
  heightPx: number = 100;
  factor: number = 2;
  marginPx: number = 30;

  topStyle: string = '';
  leftStyle: string = '';
  marginStyle: string = PicGalleryComponent.px(this.marginPx);

  ngOnChanges() {
    const topDiff: number = this.heightPx / 2;
    const leftDiff: number = (this.tales.length * this.widthPx + (this.tales.length - 1) * this.marginPx) / 2;
    this.topStyle = `calc(50% - ${PicGalleryComponent.px(topDiff)})`;
    this.leftStyle = `calc(50% - ${PicGalleryComponent.px(leftDiff)}`;
  }

  @HostBinding('style.width') widthStyle: string = PicGalleryComponent.px(this.widthPx);
  @HostBinding('style.height') heightStyle: string = PicGalleryComponent.px(this.heightPx);

  @HostListener('mouseenter') onEnter() {
    this.widthStyle = PicGalleryComponent.px(this.widthPx * this.factor);
    this.heightStyle = PicGalleryComponent.px(this.heightPx * this.factor);
  }

  @HostListener('mouseleave') onLeave() {
    this.widthStyle = PicGalleryComponent.px(this.widthPx);
    this.heightStyle = PicGalleryComponent.px(this.heightPx);
  }

  onClick(tale: Tale, e: MouseEvent): void {
    e.stopPropagation();
    this.select.emit(tale);
  }

  private static px(value: number): string {
    return `${value}px`;
  }
}
