import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Tale} from '../model/tale.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  tales: Tale[] = [
    {title: 'белая змея', url: '/white-snake'},
    {title: 'двадцать первый', url: '/twenty-fifth'},
    {title: 'безымянный ребенок', url: '/nameless-child'},
  ];

  constructor(private readonly route: Router) {
  }

  navigate(tale: Tale) {
    this.route.navigateByUrl(tale.url);
  }
}
