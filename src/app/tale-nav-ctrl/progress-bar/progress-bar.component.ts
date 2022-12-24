import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  private static readonly DEFAULT_TIMEOUT_MS: number = 1000;
  private static readonly DEFAULT_ITERATIONS: number = 100;

  private counter = 0;
  private timeIntervalId: number;

  completedProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.timeIntervalId = setInterval(
      () => {
        if (this.counter <= ProgressBarComponent.DEFAULT_ITERATIONS) {
          this.completedProgress.next(this.counter++);
        } else {
          clearInterval(this.timeIntervalId);
        }
      }, ProgressBarComponent.DEFAULT_TIMEOUT_MS);
  }
}
