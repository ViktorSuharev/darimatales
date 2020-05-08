import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralStyleService {
  private static readonly DEFAULT_OPACITY = 1;
  private static readonly LIGHT_OPACITY = 0.7;

  default = true;
  opacity = GeneralStyleService.DEFAULT_OPACITY;

  constructor() { }

  public setLight(): void {
    this.default = false;
    this.opacity = GeneralStyleService.LIGHT_OPACITY;
  }

  public setDefault(): void {
    this.default = true;
    this.opacity = GeneralStyleService.DEFAULT_OPACITY;
  }

  public isDefault(): boolean {
    return this.default;
  }
}
