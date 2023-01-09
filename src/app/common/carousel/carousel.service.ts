import {EventEmitter, Injectable} from '@angular/core';
import {Tale} from '../../tales/common/tale.model';
import {TaleService} from '../../tales/common/tale.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CarouselConfig} from './config/carousel-config.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private config: CarouselConfig = {
    autoUpdate: false,
    iteration: {
      count: 100,
      timeoutMs: 100
    }
  };
  private tales: Tale[] = [];
  private isStopped: boolean = false;

  private activeTask: NodeJS.Timer | undefined = undefined;
  private tasks: NodeJS.Timer[] = [];

  constructor(private readonly httpClient: HttpClient,
              private readonly taleService: TaleService,
              private readonly router: Router) {
    this.readConfig();
  }

  public start(page: number, initProgress: number = 0): EventEmitter<number> {
    this.isStopped = false;

    const emitter: EventEmitter<number> = new EventEmitter<number>();
    const interval = this.createInterval(page, initProgress, emitter);
    this.tasks.push(interval);

    return emitter;
  }

  private createInterval(page: number, initProgress: number, emitter: EventEmitter<number>): NodeJS.Timer {
    let progress = initProgress;

    const interval: NodeJS.Timer = setInterval(() => {
      if (this.isStopped) {
        clearInterval(interval);
      } else {
        emitter.emit(progress++);
        if (progress >= this.config.iteration.count) {
          this.tasks = this.tasks.filter(t => t !== interval);
          clearInterval(interval);
          if (this.config.autoUpdate) {
            this.openNext(page);
          }
        }
      }
    }, this.config.iteration.timeoutMs);

    return interval;
  }

  public pause(): void {
    this.isStopped = true;
  }

  public stop(): void {
    this.isStopped = true;
    this.tasks.forEach(t => clearInterval(t));
  }

  private readConfig(): void {
    this.httpClient.get<CarouselConfig>('assets/config/carousel-config.json').subscribe(c => this.config = c);
  }

  private openNext(page: number): void {
    if (this.tales.length !== 0) {
      this.navigateNext(this.tales, page);
    } else {
      this.taleService
        .loadTales()
        .subscribe(tales => {
          this.tales = tales;
          this.navigateNext(this.tales, page);
      })
    }
  }

  private navigateNext(tales: Tale[], page: number): void {
    const nextTale: Tale | undefined = CarouselService.next(tales, page);
    if (nextTale !== undefined) {
      this.router.navigateByUrl(nextTale.url);
    }
  }

  private static next(tales: Tale[], current: number): Tale | undefined {
    const count: number = tales.length;
    const inc: number = current + 1;
    const nextId: number = inc == count ? count : inc % count;

    return tales.find(t => t.order === nextId);
  }
}
