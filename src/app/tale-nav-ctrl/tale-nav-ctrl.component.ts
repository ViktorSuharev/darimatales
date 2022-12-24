import {Component, Input} from '@angular/core';
import {GeneralStyleService} from '../tales/white-snake/services/general-style.service';
import {PicGalleryService} from '../tales/white-snake/services/pic-gallery.service';

@Component({
  selector: 'app-tale-nav-ctrl',
  templateUrl: './tale-nav-ctrl.component.html',
  styleUrls: ['./tale-nav-ctrl.component.css']
})
export class TaleNavCtrlComponent {
  @Input() first: string;
  @Input() last: string;

  isNavigated = false;

  constructor(private generalStyleService: GeneralStyleService,
              public pictureGalleryService: PicGalleryService) {
  }

  onNavigateMouseOnBottomDigit(event: MouseEvent): void {
    this.isNavigated = true;
  }

  onNavigateMouseOutBottomDigit(event: MouseEvent): void {
    this.isNavigated = false;
  }

  onClickBottomDigit(e: MouseEvent): void {
    e.stopPropagation();
    this.generalStyleService.setLight();
    this.pictureGalleryService.show();
  }
}
