import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralStyleService {
  private static readonly DEFAULT_OPACITY = 1;
  private static readonly LIGHT_OPACITY = 0.7;

  opacity = GeneralStyleService.DEFAULT_OPACITY;

  constructor() { }

  public setLight(): void {
    this.opacity = GeneralStyleService.LIGHT_OPACITY;
  }

  public setDefault(): void {
    this.opacity = GeneralStyleService.DEFAULT_OPACITY;
  }
}
