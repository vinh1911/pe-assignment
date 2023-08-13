import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Gif } from 'src/app/shared/interfaces/api-interfaces';
import { GifsService } from './gifs.service';

interface GifListState {
  gifsList: Gif[];
  selectedGif: Gif | null;
  loading: boolean;
  error: string;
}

@Injectable()
export class GifsStore extends ComponentStore<GifListState> {
  constructor(private giphyService: GifsService, private route: ActivatedRoute) {
    super({ gifsList: [], selectedGif: null, loading: false, error: '' });
  }

  readonly gifsList$ = this.select(state => state.gifsList);
  readonly selectedGif$ = this.select(state => state.selectedGif);
  readonly loading$ = this.select(state => state.loading);
  readonly error$ = this.select(state => state.error);

  private setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  private setGifs = this.updater((state, gifsList: Gif[]) => ({
    ...state,
    gifsList,
    error: '',
  }));

  private setSelectedGif = this.updater((state, selectedGif: Gif) => ({
    ...state,
    selectedGif,
    error: '',
  }));

  private setError = this.updater((state, error: string) => ({
    ...state,
    error,
  }));

  readonly getTrendingGifs = this.effect<void>($ =>
    $.pipe(
      tap(() => this.setLoading(true)),
      switchMap(() => this.giphyService.getTrendingGifs()),
      tapResponse(
        trendingGifs => {
          console.log(trendingGifs);
          this.setGifs(trendingGifs);
        },
        (error: HttpErrorResponse) => this.setError(error.message)
      ),
      tap(() => this.setLoading(false))
    )
  );

  readonly searchGifs = this.effect<void>($ =>
    $.pipe(
      tap(() => {
        this.setGifs([]);
        this.setLoading(true);
      }),
      withLatestFrom(this.route.queryParams),
      switchMap(([, params]) => this.giphyService.searchGifs(params['q'])),
      tapResponse(
        searchedGifs => this.setGifs(searchedGifs),
        (error: HttpErrorResponse) => this.setError(error.message)
      ),
      tap(() => this.setLoading(false))
    )
  );

  readonly getGifById = this.effect<void>($ =>
    $.pipe(
      tap(() => this.setLoading(true)),
      withLatestFrom(this.route.paramMap),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      switchMap(([, params]) => this.giphyService.getGifById(params.get('id')!)), // note: use route guard to ensure non null
      tapResponse(
        res => this.setSelectedGif(res),
        (error: HttpErrorResponse) => this.setError(error.message)
      ),
      tap(() => this.setLoading(false))
    )
  );
}
