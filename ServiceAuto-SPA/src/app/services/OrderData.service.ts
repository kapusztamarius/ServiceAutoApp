import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Order } from '../lista-comenzi-todo/lista-comenzi-todo.component';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  retriveAllOrders() {
    return this.http.get(`${API_URL}/comenzi/comenzi-todo`);
  }

  retriveAllDoneOrders() {
    return this.http.get(`${API_URL}/comenzi/comenzi-done`);
  }

  deleteOrder(username, id) {
    return this.http.delete(`${API_URL}/comenzi/${id}`);
  }

  retrieveOrder(id) {
    return this.http.get<Order>(`${API_URL}/comenzi/${id}`);
  }

  retrieveOrderForUser(id) {
    return this.http.get<Order>(`${API_URL}/comenzi/user/${id}`);
  }

  updateOrder(id, comanda) {
    return this.http.put<Order>(`${API_URL}/comenzi/${id}`, comanda);
  }

  createOrder(comanda) {
    return this.http.post(`${API_URL}/comenzi`, comanda);
  }

  takeOrder(id) {
    const value = this.authService.getWorkingPlace();
    return this.http.put<Order>(`${API_URL}/comenzi/user/${id}`, value);
  }

  redeschideComanda(id) {
    return this.http.put<Order>(`${API_URL}/comenzi/reopen/${id}`, {});
  }

  inchideComanda(id, comanda) {
    return this.http.put<Order>(`${API_URL}/comenzi/incheie/${comanda.id}`, id);
  }
}
