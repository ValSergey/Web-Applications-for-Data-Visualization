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
