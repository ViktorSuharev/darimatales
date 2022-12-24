import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent {
  isDropDownOpened = false;

  constructor(private route: Router) {}

  flipDropDown(): void {
    this.isDropDownOpened = !this.isDropDownOpened;
  }

  selectTale(page: string): void {
    this.route.navigate(['/' + page]);
    this.flipDropDown();
  }
}
