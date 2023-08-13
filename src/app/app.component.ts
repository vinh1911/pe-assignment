import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchBoxComponent } from './shared/ui/search-box/search-box.component';

@Component({
  standalone: true,
  imports: [RouterModule, SearchBoxComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private router: Router) {}

  handleSearch(term: string): void {
    // band-aid fix for redirection on same route not trigger detection change
    // https://stackoverflow.com/questions/40983055/how-to-reload-the-current-route-with-the-angular-2-router
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(`/gifs/search?q=${term}`);
    });
  }
}
