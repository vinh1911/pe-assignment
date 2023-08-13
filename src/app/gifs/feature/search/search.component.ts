import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GifsStore } from 'src/app/gifs/data-access/gifs.store';
import { HeadingComponent } from 'src/app/shared/ui/heading/heading.component';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { GifsGridComponent } from '../../ui/gifs-grid/gifs-grid.component';

@Component({
  standalone: true,
  selector: 'app-gifs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GifsStore],
  imports: [CommonModule, HeadingComponent, GifsGridComponent, LoadingComponent],
})
export default class GifsSearchComponent implements OnInit {
  gifsList$ = this.store.gifsList$;
  loading$ = this.store.loading$;

  constructor(private readonly store: GifsStore) {}

  ngOnInit() {
    this.store.searchGifs();
  }
}
