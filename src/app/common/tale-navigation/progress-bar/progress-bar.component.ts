import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent {
  @Input()
  progress: number = 0;

  @Input()
  color: string | undefined;
}
