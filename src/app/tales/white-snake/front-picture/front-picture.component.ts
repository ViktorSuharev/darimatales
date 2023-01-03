import {Component} from '@angular/core';

@Component({
  selector: 'app-front-picture',
  templateUrl: './front-picture.component.html',
  styleUrls: ['./front-picture.component.less']
})
export class FrontPictureComponent {
  title: string = 'ПЕРЕЙТИ К ИСТОРИИ';
  isNavigated: boolean = false;
}
