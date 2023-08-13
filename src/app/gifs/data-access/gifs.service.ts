import { Injectable } from '@angular/core';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Observable, defer, map } from 'rxjs';
import { Gif } from 'src/app/shared/interfaces/api-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private gf = new GiphyFetch(environment.giphyApiKey);

  getTrendingGifs(): Observable<Gif[]> {
    return defer(() => this.gf.trending({ limit: 50 })).pipe(map(res => res.data));
  }

  getGifById(id: string): Observable<Gif> {
    return defer(() => this.gf.gif(id)).pipe(map(res => res.data));
  }

  searchGifs(q: string): Observable<Gif[]> {
    return defer(() => this.gf.search(q, { limit: 50 })).pipe(map(res => res.data));
  }
}
