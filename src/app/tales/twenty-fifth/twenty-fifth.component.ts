import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twenty-fifth',
  templateUrl: './twenty-fifth.component.html',
  styleUrls: ['./twenty-fifth.component.css']
})
export class TwentyFifthComponent implements OnInit {
  svgImage: string;

  constructor() {
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    const squareLength = Math.floor(fullHeight / Math.sqrt(2));
    const rotationPointX = Math.floor(fullWidth / 2);
    const rotationPointY = Math.floor(fullHeight / 2);
    const startPointX = Math.floor(rotationPointX - squareLength / 2);
    const startPointY = Math.floor(rotationPointY - squareLength / 2);

    this.svgImage = '' +
      '<div style="width: 100%; height: 100%">\n' +
      '    <svg style="width: 100%; height: 100%">\n' +
      '      <rect x="' + startPointX + '" y="' + startPointY + '" height="' + squareLength + '" width="' + squareLength + '"\n' +
      '            style="stroke:white; fill: transparent"\n' +
      '            transform="rotate(45 ' + rotationPointX + ' ' + rotationPointY + ')"\n' +
      '      ></rect>\n' +
      '    </svg>\n' +
      '  </div>';

    console.log(this.svgImage);
  }

  ngOnInit() {}
}
