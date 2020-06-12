import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { SideNavService } from './side-nav.service';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const WORKING_PLACE = 'workingPlace';
export const WORKING_ORDER = 'workingOrder';

export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public workingPlace: string,
    public workingOrder: number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private sidenav: SideNavService) { }

  isUserLoggedIn() {
      return !(sessionStorage.getItem(AUTHENTICATED_USER) == null);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.isUserLoggedIn) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  getWorkingPlace(): number {
    if (this.isUserLoggedIn) {
      return + sessionStorage.getItem(WORKING_PLACE);
    }
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);
    this.sidenav.hide();
  }

  executeBasicAuthentication(username, password) {
    const basicAuthHeaderString = this.createBasicHttpHeader(username, password);

    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.post<User>(`${API_URL}/users/authenticate`,
     {Username: username, Password: password}, {headers: header}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          sessionStorage.setItem(WORKING_PLACE, data.workingPlace);
          sessionStorage.setItem(WORKING_ORDER, data.workingPlace);
          return data;
        }
      )
    );
  }

  createBasicHttpHeader(username, password) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  handleBasicAuthLogin() {
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
