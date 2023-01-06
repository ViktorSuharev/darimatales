import {Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output} from '@angular/core';
import {Tale} from '../../../model/tale.model';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.less']
})
export class PicGalleryComponent implements OnChanges {

  @Input()
  options: Tale[] = [];

  @Output()
  select: EventEmitter<Tale> = new EventEmitter<Tale>();

  topStyle: string = '';
  leftStyle: string = '';
  marginStyle: string = '';

  private widthPx: number = 80;
  private heightPx: number = 50;
  private marginPx: number = 30;
  private factor: number = 2;

  ngOnChanges() {
    const topDiff: number = this.heightPx / 2;
    const leftDiff: number = (this.options.length * this.widthPx + (this.options.length - 1) * this.marginPx) / 2;
    this.topStyle = `calc(50% - ${PicGalleryComponent.px(topDiff)})`;
    this.leftStyle = `calc(50% - ${PicGalleryComponent.px(leftDiff)}`;
    this.marginStyle = PicGalleryComponent.px(this.marginPx);
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

  onClick(option: Tale, e: MouseEvent): void {
    e.stopPropagation();
    this.select.emit(option);
  }

  private static px(value: number): string {
    return `${value}px`;
  }
}
