import { Component } from '@angular/core';

@Component({
  selector: 'app-outer-rhombus',
  templateUrl: './outer-rhombus.component.html',
  styleUrls: ['./outer-rhombus.component.less']
})
export class OuterRhombusComponent {
  fullWidth = window.innerWidth;
  fullHeight = window.innerHeight;

  squareLength = Math.floor((this.fullHeight - 100) / Math.sqrt(2));
  rotationPointX = Math.floor(this.fullWidth / 2);
  rotationPointY = Math.floor(this.fullHeight / 2);
  startPointX = Math.floor(this.rotationPointX - this.squareLength / 2);
  startPointY = Math.floor(this.rotationPointY - this.squareLength / 2);
}
