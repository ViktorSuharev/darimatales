import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TaleService} from '../../../tales/common/tale.service';
import {Tale} from '../../../tales/common/tale.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  private static readonly DEFAULT_TIMEOUT_MS: number = 100;
  private static readonly DEFAULT_ITERATIONS: number = 100;
  private static readonly DEFAULT_TIME_INTERVAL: number = 100;

  public completedProgress: number = 0;

  @Input()
  color: string | undefined;

  @Input()
  page: number = 1;

  private url: string = '';

  constructor(private readonly router: Router, private readonly taleService: TaleService) {
  }

  ngOnInit(): void {
    this.taleService
      .loadTales()
      .subscribe(tales => this.url = ProgressBarComponent.next(tales, this.page).url);

    setInterval(
      () => {
        if (this.completedProgress <= ProgressBarComponent.DEFAULT_ITERATIONS) {
          this.completedProgress++;
        } else {
          clearInterval(ProgressBarComponent.DEFAULT_TIME_INTERVAL);
        }
      }, ProgressBarComponent.DEFAULT_TIMEOUT_MS);
  }

  private static next(tales: Tale[], current: number): Tale {
    const count: number = tales.length;
    const inc: number = 1 + current;
    const nextId: number = inc == count ? count : inc % count;
    console.log('Next id ' + nextId);
    console.log('tales ' + JSON.stringify(tales));

    const nextTale: Tale = tales.filter(t => t.id === nextId)[0];
    console.log('Next tale ' + nextTale);

    return nextTale;
  }
}
