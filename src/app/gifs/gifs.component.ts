import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../shared/ui/heading/heading.component';
import { LoadingComponent } from '../shared/ui/loading/loading.component';
import { GifsStore } from './data-access/gifs.store';
import { GifsGridComponent } from './ui/gifs-grid/gifs-grid.component';

@Component({
  standalone: true,
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss'],
  imports: [CommonModule, HeadingComponent, GifsGridComponent, LoadingComponent],
  providers: [GifsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifsComponent implements OnInit {
  gifsList$ = this.store.gifsList$;
  loading$ = this.store.loading$;

  constructor(private readonly store: GifsStore) {}

  ngOnInit() {
    this.store.getTrendingGifs();
  }
}
