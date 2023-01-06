import {Component, Input} from '@angular/core';
import {Option} from '../../../model/option.model';
import {Router} from '@angular/router';
import {OverlayService} from '../services/overlay.service';

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

  constructor(private readonly route: Router,
              private readonly overlayService: OverlayService) {
  }

  onClick(option: Option, e: MouseEvent): void {
    e.stopPropagation();
    this.route.navigateByUrl(option.url);
    this.overlayService.hide();
  }
}
