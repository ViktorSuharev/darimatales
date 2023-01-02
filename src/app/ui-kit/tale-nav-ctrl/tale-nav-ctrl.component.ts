import {Component, HostListener, Input} from '@angular/core';
import {GeneralStyleService} from '../../tales/white-snake/services/general-style.service';
import {PicGalleryService} from '../../tales/white-snake/services/pic-gallery.service';
import {Option} from '../components/round-select/round-select.component';

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

  constructor(private generalStyleService: GeneralStyleService,
              public pictureGalleryService: PicGalleryService) {
  }

  onClickBottomDigit(e: MouseEvent): void {
    e.stopPropagation();
    this.generalStyleService.setLight();
    this.pictureGalleryService.show();
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();

    if (!this.generalStyleService.default.getValue()) {
      this.generalStyleService.setDefault();
    }

    if (this.pictureGalleryService.visible.getValue()) {
      this.pictureGalleryService.hide();
    }
  }
}
