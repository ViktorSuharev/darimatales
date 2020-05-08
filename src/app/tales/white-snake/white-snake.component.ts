import { Component, OnInit } from '@angular/core';
import {GeneralStyleService} from './services/general-style.service';
import {PicGalleryService} from './services/pic-gallery.service';

@Component({
  selector: 'app-white-snake',
  templateUrl: './white-snake.component.html',
  styleUrls: ['./white-snake.component.css']
})
export class WhiteSnakeComponent {
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
