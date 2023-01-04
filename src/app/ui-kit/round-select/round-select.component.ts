import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Named} from '../model/named.model';

interface SelectOption<T extends Named> {
  title: string,
  value: T
}

@Component({
  selector: 'app-round-select',
  templateUrl: './round-select.component.html',
  styleUrls: ['./round-select.component.less']
})
export class RoundSelectComponent<T extends Named> {

  @Input()
  title: string = '';

  @Input()
  set options(opts: T[]) {
    if (opts !== undefined && opts !== null) {
      this.selectOptions = opts.map(o => this.mapInput(o));
    }
  }

  @Output()
  onSelect: EventEmitter<T> = new EventEmitter<T>();

  selectOptions: SelectOption<T>[] = [];

  @HostListener("click", ['$event'])
  clickIn(e: MouseEvent) {
    e.stopPropagation();
  }

  @HostListener("document:click", ['$event'])
  clickedOut(e: MouseEvent) {
    e.stopPropagation();
    this.isDropDownOpened = false;
  }

  isDropDownOpened = false;

  flipDropDown(): void {
    this.isDropDownOpened = !this.isDropDownOpened;
  }

  select(opt: SelectOption<T>): void {
    this.onSelect.next(opt.value);
    this.flipDropDown();
  }

  private mapInput(o: T): SelectOption<T> {
    return {
      title: o.title,
      value: o
    };
  }
}
