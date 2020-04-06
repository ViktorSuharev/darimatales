import { Component } from '@angular/core';
import {GeneralStyleService} from './services/general-style.service';
import {PicGalleryService} from './services/pic-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public generalStyleService: GeneralStyleService,
    public picGalleryService: PicGalleryService) {
  }

  setDefaultView(): void {
    if (!this.generalStyleService.isDefault()) {
      this.generalStyleService.setDefault();
    }

    if (this.picGalleryService.visible.getValue()) {
      this.picGalleryService.hide();
    }
  }
}
