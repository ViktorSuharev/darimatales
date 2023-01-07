import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tale} from './tale.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaleService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public loadTales(): Observable<Tale[]> {
    return this.httpClient.get<Tale[]>('assets/data/tales.json');
  }
}
