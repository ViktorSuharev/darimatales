import {Component} from '@angular/core';
import {PicGalleryService} from '../../../../services/pic-gallery.service';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.less']
})
export class FrontPictureComponent {
  title: string = 'ПЕРЕЙТИ К ИСТОРИИ';
  isNavigated: boolean = false;

  constructor(public pictureGalleryService: PicGalleryService) {
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
