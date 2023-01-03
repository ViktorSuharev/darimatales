import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicGalleryService {

  public visible: boolean = false;

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }
}
