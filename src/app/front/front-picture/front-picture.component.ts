import {Component} from '@angular/core';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.css']
})
export class FrontPictureComponent {
  isFullMode = false;

  onNavigateMouseOnButton(event: MouseEvent): void {
    this.isFullMode = true;
  }

  onNavigateMouseOutButton(event: MouseEvent): void {
    this.isFullMode = false;
  }
}
