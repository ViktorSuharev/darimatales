import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicGalleryService {

  public visible = new BehaviorSubject<boolean>(false);

  public show(): void {
    this.visible.next(true);
  }

  public hide(): void {
    this.visible.next(false);
  }
}
