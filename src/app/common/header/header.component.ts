import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tale} from '../../tales/common/tale.model';
import {TaleService} from '../../tales/common/tale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  tales: Tale[] = [];

  constructor(private readonly route: Router,
              private readonly talesService: TaleService) {
  }

  ngOnInit() {
    this.talesService.loadTales().subscribe(tales => this.tales = tales);
  }

  navigate(tale: Tale) {
    this.route.navigateByUrl(tale.url);
  }
}
