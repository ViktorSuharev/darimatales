import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tale} from '../common/tale.model';
import {TaleService} from '../common/tale.service';

@Component({
  selector: 'app-twenty-fifth',
  templateUrl: './twenty-fifth.component.html',
  styleUrls: ['./twenty-fifth.component.less']
})
export class TwentyFifthComponent implements OnInit, OnDestroy {
  svgImage: string;
  svgInnerImage: string;

  public tale: Tale = {
    order: 0,
    title: '',
    image: '',
    url: '',
  };

  ngOnInit() {
    console.log('TwentyFifthComponent was initialized at ' + new Date());
    this.taleService
      .loadTales()
      .subscribe(t => this.tale = t.filter(t => t.url === '/twenty-fifth')[0]);
  }

  ngOnDestroy() {
    console.log('TwentyFifthComponent was destroyed at ' + new Date());
  }

  constructor(private readonly taleService: TaleService) {
    const fullWidth = window.innerWidth;
    const fullHeight = window.innerHeight;

    const squareLength = Math.floor((fullHeight - 100) / Math.sqrt(2));
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
      '      <rect x="' + (startPointX + 100) + '" y="' + (startPointY + 100) + '" height="' + (squareLength - 200) + '" width="' + (squareLength - 200) + '"\n' +
      '            style="fill: url(#three_opacity_stops);"\n' +
      '            transform="rotate(45 ' + rotationPointX + ' ' + rotationPointY + ')"\n' +
      '      ></rect>\n' +
      '  </svg>\n' +
      '</div>';
  }
}
