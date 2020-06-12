import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OrderDataService } from '../services/OrderData.service';
import { AuthenticationService, WORKING_PLACE } from '../services/authentication.service';

export class Order {
  constructor(
    public id: number,
    public numarMasina: string,
    public numeClient: string,
    public numarTelefon: string,
    public descriere: string,
    public postLucru: number,
    public completata: number,
    public reclamatie: string
  ) {}
}

@Component({
  selector: 'app-order-todo',
  templateUrl: './lista-comenzi-todo.component.html',
  styleUrls: ['./lista-comenzi-todo.component.css']
})
export class ListaComenziTodoComponent implements OnInit {

  orders;

  constructor(
    private orderData: OrderDataService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderData.retriveAllOrders().subscribe(
      response => {
        this.orders = response;
      }
    );
  }

  deleteTodo(id) {
    this.orderData.deleteOrder('user', id).subscribe(
      response => {
        this.getAllOrders();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['comanda', id]);
  }

  preiaComanda(id) {
    this.orderData.takeOrder(id).subscribe(() => {
      this.getAllOrders();
    },
      err => {
        console.log(err.error);
      }
    );
  }

  addOrder() {
    this.router.navigate(['comanda', 0]);
  }

  getWorkingPlace(): number {
    return + sessionStorage.getItem(WORKING_PLACE);
  }
}
