import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralStyleService {
  private static readonly DEFAULT_OPACITY = 1;
  private static readonly LIGHT_OPACITY = 0.7;

  public default: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  opacity = GeneralStyleService.DEFAULT_OPACITY;

  constructor() { }

  public setLight(): void {
    this.default.next(false);
    this.opacity = GeneralStyleService.LIGHT_OPACITY;
  }

  public setDefault(): void {
    this.default.next(true);
    this.opacity = GeneralStyleService.DEFAULT_OPACITY;
  }

  public isDefault(): boolean {
    return this.default.getValue();
  }
}
