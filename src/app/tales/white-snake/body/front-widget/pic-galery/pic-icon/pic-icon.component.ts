import {Component} from '@angular/core';

@Component({
  selector: 'app-pic-item',
  templateUrl: './pic-icon.component.html',
  styleUrls: ['./pic-icon.component.css']
})
export class PicIconComponent {

  onPictureItemClick(e: MouseEvent): void {
    // implement navigation to page
    e.stopPropagation();
  }
}
