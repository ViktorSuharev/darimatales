import {Component, Input} from '@angular/core';
import {GeneralStyleService} from '../../service/general-style.service';

@Component({
  selector: 'app-front-widget',
  templateUrl: './front-widget.component.html',
  styleUrls: ['./front-widget.component.css']
})
export class FrontWidgetComponent {
  @Input() first: string;
  @Input() last: string;

  isNavigated = false;
  isClicked = false;

  constructor(private generalStyleService: GeneralStyleService) {
  }

  onNavigateMouseOnBottomDigit(event: MouseEvent): void {
    this.isNavigated = true;
  }

  onNavigateMouseOutBottomDigit(event: MouseEvent): void {
    this.isNavigated = false;
  }

  onClickBottomDigit(): void {
    this.isClicked = true;
    this.generalStyleService.setLight();
  }
}
