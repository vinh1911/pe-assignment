import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeadingComponent } from 'src/app/shared/ui/heading/heading.component';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { UserInfoComponent } from 'src/app/shared/ui/user-info/user-info.component';
import { GifsStore } from '../../data-access/gifs.store';
import { GifsItemComponent } from '../../ui/gifs-item/gifs-item.component';

@Component({
  standalone: true,
  selector: 'app-gifs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GifsStore],
  imports: [CommonModule, UserInfoComponent, GifsItemComponent, HeadingComponent, LoadingComponent],
})
export default class GifsDetailComponent implements OnInit {
  gif$ = this.store.selectedGif$;
  loading$ = this.store.loading$;

  constructor(private readonly store: GifsStore) {}

  ngOnInit() {
    this.store.getGifById();
  }
}
