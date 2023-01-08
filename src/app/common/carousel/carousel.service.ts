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
  private static readonly DEFAULT_ITERATIONS: number = 100;
  private static readonly DEFAULT_TIMEOUT_MS: number = 100;

  private tales: Tale[] = [];
  private page: number = 0;
  private isStopped: boolean = false;

  private config: CarouselConfig = {
    autoUpdate: false
  };

  private tasks: NodeJS.Timer[] = [];

  constructor(private readonly httpClient: HttpClient,
              private readonly taleService: TaleService,
              private readonly router: Router) {
    this.readConfig();
  }

  public start(page: number, progress: number = 0): EventEmitter<number> {
    this.page = page;
    this.isStopped = false;

    const emitter: EventEmitter<number> = new EventEmitter<number>();
    let completedProgress: number = progress;
    const interval = setInterval(() => {
      if (this.isStopped) {
        clearInterval(interval);
      } else {
        completedProgress++;
        emitter.emit(completedProgress);
        if (completedProgress >= CarouselService.DEFAULT_ITERATIONS) {
          this.tasks = this.tasks.filter(t => t !== interval);
          clearInterval(interval);
          if (this.config.autoUpdate) {
            this.openNext(this.page);
          }
        }
      }
    }, CarouselService.DEFAULT_TIMEOUT_MS);
    this.tasks.push(interval);

    return emitter;
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
      const nextTale: Tale = CarouselService.next(this.tales, page);
      this.navigate(nextTale);
    } else {
      this.taleService
        .loadTales()
        .subscribe(tales => {
          this.tales = tales;
          const nextTale: Tale = CarouselService.next(tales, page);
          this.navigate(nextTale);
      })
    }
  }

  private navigate(tale: Tale): void {
    this.router.navigateByUrl(tale.url);
  }

  private static next(tales: Tale[], current: number): Tale {
    const count: number = tales.length;
    const inc: number = 1 + current;
    const nextId: number = inc == count ? count : inc % count;

    return tales.filter(t => t.order === nextId)[0];
  }
}
