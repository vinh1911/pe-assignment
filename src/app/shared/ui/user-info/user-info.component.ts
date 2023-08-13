import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/api-interfaces';

@Component({
  standalone: true,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class UserInfoComponent {
  @Input() user?: User;
}
