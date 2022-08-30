import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return ' Web Applications for Data Visualization - Map Component';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
