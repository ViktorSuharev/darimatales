import {Component} from '@angular/core';
import {OverlayService} from './common/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'darimatales';

  constructor(public readonly overlayService: OverlayService) {
  }
}
