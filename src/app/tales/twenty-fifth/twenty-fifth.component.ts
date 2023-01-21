import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tale} from '../common/tale.model';
import {TaleService} from '../common/tale.service';

@Component({
  selector: 'app-twenty-fifth',
  templateUrl: './twenty-fifth.component.html',
  styleUrls: ['./twenty-fifth.component.less']
})
export class TwentyFifthComponent implements OnInit, OnDestroy {

  public tale: Tale = {
    order: 0,
    title: '',
    image: '',
    url: '',
  };

  ngOnInit() {
    console.log('TwentyFifthComponent was initialized at ' + new Date());
    this.taleService
      .loadTales()
      .subscribe(t => this.tale = t.filter(t => t.url === '/twenty-fifth')[0]);
  }

  ngOnDestroy() {
    console.log('TwentyFifthComponent was destroyed at ' + new Date());
  }

  constructor(private readonly taleService: TaleService) {}
}
