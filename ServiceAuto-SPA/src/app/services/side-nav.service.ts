import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  // tslint:disable-next-line: no-inferrable-types
  hideSideNav: boolean = true;

  constructor() { }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }

  hide(): void {
    this.hideSideNav = true;
  }
}