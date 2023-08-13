import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'gifs',
    children: [
      {
        path: '',
        loadComponent: () => import('./gifs/gifs.component'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/feature/search/search.component'),
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./gifs/feature/detail/detail.component'),
      },
    ],
  },
  {
    path: '**', //improvement: change to '' and implement 404.html + route guard
    redirectTo: 'gifs',
    pathMatch: 'full',
  },
];
