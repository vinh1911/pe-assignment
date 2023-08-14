# Pi.Ex Assignment

Unfotunately I had a busy week so I can only spend my weekends for this projects. Roughly 8hrs of coding time.

My main focus while developing this was the structure of the project.

It is inspired by Nx's scaleable monorepo style architeture and I leveraged the new Standalone Component to shift from a standard Module focused Angular app to a Component/Feature focused one.

I tried to make my code declarative with async pipe, rxjs, component-store for a simple and clean code so I didn't comment on my code much.

## If I had more time / What I would add

Virtual inifite scroll on the GIFs list or some kind of pagination, currently it only load 50 gifs.

Add unit test and e2e test

Improve the GIFs grid css so that the space is closer (Masonry grid)

Error handling, 404.html, Route Guard, etc....

Styling in general i guess

## About

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
