import {Component, Input} from '@angular/core';
import {GeneralStyleService} from '../../services/general-style.service';
import {PicGalleryService} from '../../services/pic-gallery.service';

@Component({
  selector: 'app-front-widget',
  templateUrl: './front-widget.component.html',
  styleUrls: ['./front-widget.component.css']
})
export class FrontWidgetComponent {
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
    this.generalStyleService.setLight();
    this.pictureGalleryService.show();
    e.stopPropagation();
  }
}
