                             
							          Publication of this work
								  
								  
								  
							   [Valentinov.me](http://valentinov.me)
							  
В данном примере я использовал Службу, для внедрения зависимостей @Injectable()  MapService (ну и все остальные базовые примочки)

In this example, i used the Service for Dependency Injection 
________________________________________________________________________________							  
```
import { Injectable } from '@angular/core';

export class Marker {
  location: any;
}

export class Route {
  weight: number = 0;

  color: string = '';

  opacity: number =0;

  mode: string = '';

  locations: any[] = [];
}

const markers: Marker[] = [{
  location: '47.132950, 39.420823',
}, {
  location: [46.5047, 40.1814],
}, {
  location: 'Ростов-на-Дону,Зерноград'
}];

const routes: Route[] = [{
  weight: 6,
  color: 'blue',
  opacity: 0.5,
  mode: '',
  locations: [
    [47.132950, 39.420823],
    [46.5047, 40.1814],
    'Ростов-на-Дону,Зерноград',
  ],

}];

@Injectable()
export class MapService {
  getMarkers(): Marker[] {
    return markers;
  }

  getRoutes(): Route[] {
    return routes;
  }
}						  
```
_________________________________________________________________________________

# Apptemp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
