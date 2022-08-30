import { Component } from '@angular/core';
import { Marker, Route, MapService } from '../../shared/services';


@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  routes: Route[];

  markers: Marker[];

  constructor(service: MapService) {
    this.markers = service.getMarkers();
    this.routes = service.getRoutes();
  }

  setMode(e:any) {
    this.routes = this.routes.map((item) => {
      item.mode = e.value;
      return item;
    });
  }

  selectColor(e:any) {
    this.routes = this.routes.map((item) => {
      item.color = e.value;
      return item;
    });
  }
}
