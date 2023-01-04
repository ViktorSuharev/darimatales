import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Option} from '../model/option.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  options: Option[] = [
    {title: 'белая змея', url: '/white-snake'},
    {title: 'двадцать первый', url: '/twenty-fifth'},
    {title: 'безымянный ребенок', url: '/nameless-child'},
  ];

  constructor(private readonly route: Router) {
  }

  navigate(option: Option) {
    this.route.navigateByUrl(option.url);
  }
}
