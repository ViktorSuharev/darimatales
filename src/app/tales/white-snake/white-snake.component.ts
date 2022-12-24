import {Component, ViewEncapsulation} from '@angular/core';
import {GeneralStyleService} from './services/general-style.service';
import {PicGalleryService} from './services/pic-gallery.service';

@Component({
  selector: 'app-white-snake',
  templateUrl: './white-snake.component.html',
  styleUrls: ['./white-snake.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WhiteSnakeComponent {
  constructor(
    public generalStyleService: GeneralStyleService,
    private picGalleryService: PicGalleryService) {
  }

  setDefaultView(): void {
    if (!this.generalStyleService.default.getValue()) {
      this.generalStyleService.setDefault();
    }

    if (this.picGalleryService.visible.getValue()) {
      this.picGalleryService.hide();
    }
  }
}
