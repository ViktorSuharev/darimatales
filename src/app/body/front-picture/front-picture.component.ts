import {Component} from '@angular/core';
import {PicGalleryService} from '../../services/pic-gallery.service';
import {GeneralStyleService} from '../../services/general-style.service';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.css']
})
export class FrontPictureComponent {
  isNavigated = false;

  constructor(public generalStyleService: GeneralStyleService,
              private pictureGalleryService: PicGalleryService) {
  }

  onNavigateMouseOnButton(event: MouseEvent): void {
    if (!this.pictureGalleryService.visible.getValue()) {
      this.isNavigated = true;
    }
  }

  onNavigateMouseOutButton(event: MouseEvent): void {
    this.isNavigated = false;
  }
}
