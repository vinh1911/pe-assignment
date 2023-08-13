import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from 'src/app/shared/interfaces/api-interfaces';
import { GifsItemComponent } from '../gifs-item/gifs-item.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [GifsItemComponent, NgFor],
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsGridComponent {
  @Input() gifs: Gif[] = [];
}
