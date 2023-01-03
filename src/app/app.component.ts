import {Component} from '@angular/core';
import {PicGalleryService} from './services/pic-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'darimatales';

  constructor(public readonly pictureGalleryService: PicGalleryService) {
  }
}
