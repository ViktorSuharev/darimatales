import {Component, Input} from '@angular/core';
import {Option} from '../../components/round-select/round-select.component';

@Component({
  selector: 'app-pic-galery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.css']
})
export class PicGalleryComponent {
  public readonly options: Option[] = [
    {title: 'белая змея', url: '/white-snake', image: 'url(\'/assets/center-pic-1.jpg\')'},
    {title: 'двадцать первый', url: '/twenty-fifth', image: 'url(\'/assets/center-pic-1.jpg\')'},
    {title: 'безымянный ребенок', url: '/nameless-child', image: 'url(\'/assets/center-pic-1.jpg\')'},
  ];

  @Input() isVisible = false;
}
