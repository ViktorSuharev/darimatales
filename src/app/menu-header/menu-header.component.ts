import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.less']
})
export class MenuHeaderComponent {
  public isDropDownOpened = false;

  constructor(private readonly route: Router) {}

  flipDropDown(): void {
    this.isDropDownOpened = !this.isDropDownOpened;
  }

  selectTale(page: string): void {
    this.route.navigateByUrl(page);
    this.flipDropDown();
  }
}
