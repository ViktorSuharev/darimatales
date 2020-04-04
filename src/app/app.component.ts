import { Component } from '@angular/core';
import {GeneralStyleService} from './service/general-style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'darimatales';

  constructor(public generalStyleService: GeneralStyleService) {
  }
}
