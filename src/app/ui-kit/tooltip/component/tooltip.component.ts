import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent {
  tooltip: string = '';
  left: number = 0;
  top: number = 0;

  constructor() {}
}
