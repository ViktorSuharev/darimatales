import {Component} from '@angular/core';
import {PicGalleryService} from '../../services/pic-gallery.service';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.css']
})
export class FrontPictureComponent {
  isNavigated = false;

  constructor(private pictureGalleryService: PicGalleryService) {
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
