import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  @Input()
  title: string = '';

  public isNavigated = false;

  onNavigateMouseOnButton(event: MouseEvent): void {
    this.isNavigated = true;
  }

  onNavigateMouseOutButton(event: MouseEvent): void {
    this.isNavigated = false;
  }
}
