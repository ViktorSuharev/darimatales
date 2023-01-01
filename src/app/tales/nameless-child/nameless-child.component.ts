import {Component} from '@angular/core';

@Component({
  selector: 'app-nameless-child',
  templateUrl: './nameless-child.component.html',
  styleUrls: ['./nameless-child.component.less']
})
export class NamelessChildComponent {
  public readonly name: string = 'БЕЗЫМЯННЫЙ РЕБЕНОК'
  public readonly title: string = 'ПЕРЕЙТИ К ИСТОРИИ'
}
