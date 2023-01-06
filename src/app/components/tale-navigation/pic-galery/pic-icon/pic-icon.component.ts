import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {OverlayService} from '../../services/overlay.service';
import {Option} from '../../../../model/option.model';

@Component({
  selector: 'app-pic-item',
  templateUrl: './pic-icon.component.html',
  styleUrls: ['./pic-icon.component.css']
})
export class PicIconComponent {

  @Input()
  width: string = '';

  @Input()
  height: string = '';

  @Input()
  option: Option = {
    title: '',
    url: ''
  };

  constructor(private readonly route: Router,
              private readonly overlayService: OverlayService) {
  }

  onPictureItemClick(e: MouseEvent): void {
    e.stopPropagation();
    if (this.option !== undefined) {
      this.route.navigateByUrl(this.option.url);
      this.overlayService.hide();
    }
  }
}
