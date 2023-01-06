import {Component, Input} from '@angular/core';
import {Option} from '../../../model/option.model';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.less']
})
export class PicGalleryComponent {
  public readonly options: Option[] = [
    {title: 'белая змея', url: '/white-snake', image: 'url(\'/assets/center-pic-1.jpg\')'},
    {title: 'двадцать первый', url: '/twenty-fifth', image: 'url(\'/assets/twenty-fifth-background.jpg\')'},
    {title: 'безымянный ребенок', url: '/nameless-child', image: 'url(\'/assets/nameless-child-background.jpg\')'},
  ];

  width: string = '80px';
  height: string = '50px';

  @Input() isVisible = false;
}
