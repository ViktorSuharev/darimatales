import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  private static readonly DEFAULT_TIMEOUT_MS: number = 1000;
  private static readonly DEFAULT_ITERATIONS: number = 100;
  private timeIntervalId: number = 100;

  public completedProgress: number = 0;

  @Input()
  color: string = '';

  ngOnInit(): void {
    setInterval(
      () => {
        if (this.completedProgress <= ProgressBarComponent.DEFAULT_ITERATIONS) {
          this.completedProgress++;
        } else {
          clearInterval(this.timeIntervalId);
        }
      }, ProgressBarComponent.DEFAULT_TIMEOUT_MS);
  }
}
