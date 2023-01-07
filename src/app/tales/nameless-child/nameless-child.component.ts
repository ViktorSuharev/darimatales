import {Component, OnInit} from '@angular/core';
import {TaleService} from '../common/tale.service';
import {Tale} from '../common/tale.model';

@Component({
  selector: 'app-nameless-child',
  templateUrl: './nameless-child.component.html',
  styleUrls: ['./nameless-child.component.less']
})
export class NamelessChildComponent implements OnInit {
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
    this.taleService
      .loadTales()
      .subscribe(t => this.tale = t.filter(t => t.url === '/nameless-child')[0]);
  }
}
