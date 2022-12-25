import {Component} from '@angular/core';
import {Option} from '../ui-kit/components/round-select/round-select.component';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.less']
})
export class MenuHeaderComponent {
  options: Option[] = [
    {title: 'белая змея', url: '/white-snake'},
    {title: 'двадцать первый', url: '/twenty-fifth'},
    {title: 'безымянный ребенок', url: '/nameless-child'},
  ];
}
