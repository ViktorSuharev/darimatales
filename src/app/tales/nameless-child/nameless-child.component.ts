import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaleService} from '../common/tale.service';
import {Tale} from '../common/tale.model';

@Component({
  selector: 'app-nameless-child',
  templateUrl: './nameless-child.component.html',
  styleUrls: ['./nameless-child.component.less']
})
export class NamelessChildComponent implements OnInit, OnDestroy {
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
    console.log('NamelessChildComponent was initialized at ' + new Date());
    this.taleService
      .loadTales()
      .subscribe(t => this.tale = t.filter(t => t.url === '/nameless-child')[0]);
  }

  ngOnDestroy() {
    console.log('NamelessChildComponent was destroyed at ' + new Date());
  }
}
