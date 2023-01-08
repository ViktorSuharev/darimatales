import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tale} from '../common/tale.model';
import {TaleService} from '../common/tale.service';

@Component({
  selector: 'app-white-snake',
  templateUrl: './white-snake.component.html',
  styleUrls: ['./white-snake.component.less']
})
export class WhiteSnakeComponent implements OnInit, OnDestroy {
  public readonly title: string = 'ПЕРЕЙТИ К ИСТОРИИ'

  public tale: Tale = {
    order: 0,
    title: '',
    image: '',
    url: '',
  };

  constructor(private readonly taleService: TaleService) {
  }

  ngOnInit() {
    console.log('WhiteSnakeComponent was initialized at ' + new Date());
    this.taleService
      .loadTales()
      .subscribe(t => this.tale = t.filter(t => t.url === '/white-snake')[0]);
  }

  ngOnDestroy() {
    console.log('WhiteSnakeComponent was destroyed at ' + new Date());
  }
}
