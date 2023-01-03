import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Option} from '../../../../ui-kit/round-select/round-select.component';
import {OverlayService} from '../../services/overlay.service';

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