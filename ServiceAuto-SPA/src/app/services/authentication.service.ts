import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public workingPlace: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

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

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATED_USER);
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
          console.log(data);
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
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
