import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-front-widget',
  templateUrl: './front-widget.component.html',
  styleUrls: ['./front-widget.component.css']
})
export class FrontWidgetComponent {
  @Input() first: string;
  @Input() last: string;

  isNavigated = false;

  onNavigateMouseOnBottomDigit(event: MouseEvent): void {
    this.isNavigated = true;
  }

  onNavigateMouseOutBottomDigit(event: MouseEvent): void {
    this.isNavigated = false;
  }
}
