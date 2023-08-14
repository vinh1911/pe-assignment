import { NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gif } from 'src/app/shared/interfaces/api-interfaces';

@Component({
  standalone: true,
  imports: [NgIf, NgStyle, RouterLink],
  selector: 'app-gifs-item',
  templateUrl: './gifs-item.component.html',
  styleUrls: ['./gifs-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsItemComponent {
  @Input() gif?: Gif;
  @Input() thumbnailDisplay = true;
  randomColor = Math.floor(Math.random()*16777215).toString(16);
}
