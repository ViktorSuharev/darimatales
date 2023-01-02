import {Component} from '@angular/core';
import {Option} from '../ui-kit/components/round-select/round-select.component';

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
}
