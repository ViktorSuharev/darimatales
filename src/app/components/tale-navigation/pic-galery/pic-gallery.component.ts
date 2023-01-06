import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Option} from '../../../model/option.model';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.less']
})
export class PicGalleryComponent {

  @Input()
  options: Option[] = [];

  @Output()
  select: EventEmitter<Option> = new EventEmitter<Option>();

  onClick(option: Option, e: MouseEvent): void {
    e.stopPropagation();
    this.select.emit(option);
  }
}
