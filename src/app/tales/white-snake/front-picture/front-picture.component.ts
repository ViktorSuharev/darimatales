import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.less']
})
export class FrontPictureComponent {
  isHovered: boolean = false;

  @Input()
  image: string = '';
}
