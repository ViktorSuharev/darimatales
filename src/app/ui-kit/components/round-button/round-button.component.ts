import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.less']
})
export class RoundButtonComponent {
  @Input()
  title: string = '';
}
