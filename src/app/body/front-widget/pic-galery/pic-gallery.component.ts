import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pic-galery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.css']
})
export class PicGalleryComponent {
  @Input() isVisible = false;
}
