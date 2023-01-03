import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Option} from '../../../components/round-select/round-select.component';
import {PicGalleryService} from '../../../../services/pic-gallery.service';

@Component({
  selector: 'app-pic-item',
  templateUrl: './pic-icon.component.html',
  styleUrls: ['./pic-icon.component.css']
})
export class PicIconComponent {

  @Input()
  option: Option = {
    title: '',
    url: ''
  };

  constructor(private readonly route: Router,
              private readonly pictureGalleryService: PicGalleryService) {
  }

  onPictureItemClick(e: MouseEvent): void {
    // implement navigation to page
    e.stopPropagation();
    if (this.option !== undefined) {
      this.route.navigateByUrl(this.option.url);
      this.pictureGalleryService.hide();
    }
  }
}
