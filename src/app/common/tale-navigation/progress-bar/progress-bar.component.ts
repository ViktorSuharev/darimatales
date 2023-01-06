import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  private static readonly DEFAULT_TIMEOUT_MS: number = 1000;
  private static readonly DEFAULT_ITERATIONS: number = 100;
  private static readonly DEFAULT_TIME_INTERVAL: number = 100;

  public completedProgress: number = 0;

  @Input()
  color: string | undefined;

  ngOnInit(): void {
    setInterval(
      () => {
        if (this.completedProgress <= ProgressBarComponent.DEFAULT_ITERATIONS) {
          this.completedProgress++;
        } else {
          clearInterval(ProgressBarComponent.DEFAULT_TIME_INTERVAL);
        }
      }, ProgressBarComponent.DEFAULT_TIMEOUT_MS);
  }
}
