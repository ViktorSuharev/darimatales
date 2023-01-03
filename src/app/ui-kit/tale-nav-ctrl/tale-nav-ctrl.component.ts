import {Component, HostListener, Input} from '@angular/core';
import {PicGalleryService} from '../../services/pic-gallery.service';

@Component({
  selector: 'app-tale-nav-ctrl',
  templateUrl: './tale-nav-ctrl.component.html',
  styleUrls: ['./tale-nav-ctrl.component.less']
})
export class TaleNavCtrlComponent {
  @Input()
  current: string = '';

  @Input()
  total: string = '';

  @Input()
  color: string = '';

  title: string = 'ВЫБРАТЬ ИСТОРИЮ';
  isNavigated = false;

  constructor(public pictureGalleryService: PicGalleryService) {
  }

  onClickBottomDigit(e: MouseEvent): void {
    e.stopPropagation();
    if (this.pictureGalleryService.visible.getValue()) {
      this.pictureGalleryService.hide();
    } else {
      this.pictureGalleryService.show();
    }
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    if (this.pictureGalleryService.visible.getValue()) {
      this.pictureGalleryService.hide();
    }
  }
}
