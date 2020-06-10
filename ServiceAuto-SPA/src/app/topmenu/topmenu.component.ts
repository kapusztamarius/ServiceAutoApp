import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(private router: Router,
              public authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}

