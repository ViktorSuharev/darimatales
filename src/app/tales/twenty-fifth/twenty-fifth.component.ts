import {Component} from '@angular/core';

@Component({
  selector: 'app-twenty-fifth',
  templateUrl: './twenty-fifth.component.html',
  styleUrls: ['./twenty-fifth.component.less']
})
export class TwentyFifthComponent {
  svgImage: string;
  svgInnerImage: string;

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

    this.svgInnerImage = '' +
      '<div style="width: 100%; height: 100%">\n' +
      '  <svg style="width: 100%; height: 100%">\n' +
      '  <defs>\n' +
      '    <linearGradient id="three_opacity_stops">\n' +
      '      <stop offset="0%" style="stop-color: #906; stop-opacity: 1.0"/>\n' +
      '      <stop offset="50%" style="stop-color: #906; stop-opacity: 0.3"/>\n' +
      '      <stop offset="100%" style="stop-color: #906; stop-opacity: 0.10"/>\n' +
      '    </linearGradient>\n' +
      '  </defs>' +
      '    <rect x="' + startPointX * Math.sqrt(1.4) + '" y="' + startPointY * Math.sqrt(2) +
             '" height="' + squareLength / Math.sqrt(1.5) + '" width="' + squareLength / Math.sqrt(1.5) + '"\n' +
      '         style="fill: url(#three_opacity_stops);"\n' +
      '         transform="rotate(45 ' + rotationPointX + ' ' + rotationPointY + ')"\n' +
      '    ></rect>\n' +
      '  </svg>\n' +
      '</div>';
  }
}
