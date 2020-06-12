import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
