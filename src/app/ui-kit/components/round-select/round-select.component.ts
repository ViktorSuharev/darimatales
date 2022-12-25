import {Component, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-round-select',
  templateUrl: './round-select.component.html',
  styleUrls: ['./round-select.component.less']
})
export class RoundSelectComponent {
  @Input()
  title: string = '';

  @Input()
  options: Option[] = [];

  @HostListener("click", ['$event'])
  clicked(e: MouseEvent) {
    e.stopPropagation();
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    this.isDropDownOpened = false;
  }

  isDropDownOpened = false;

  constructor(private readonly route: Router) {}

  flipDropDown(): void {
    this.isDropDownOpened = !this.isDropDownOpened;
  }

  selectTale(page: string): void {
    this.route.navigateByUrl(page);
    this.flipDropDown();
  }
}

export interface Option {
  title: string;
  url: string;
}
