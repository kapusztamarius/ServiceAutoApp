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
  selector: 'app-order-done',
  templateUrl: './lista-comenzi-finalizate.component.html',
  styleUrls: ['./lista-comenzi-finalizate.component.css']
})
export class ListaComenziFinalizateComponent implements OnInit {

  orders;

  constructor(
    private orderData: OrderDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderData.retriveAllDoneOrders().subscribe(
      response => {
        this.orders = response;
      }
    );
  }

  redeschideComanda(id) {
    this.orderData.redeschideComanda(id).subscribe(
      response => {
        this.getAllOrders();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['comanda', id]);
  }

  preiaComanda(id) {
    console.log(id);
    this.orderData.takeOrder(id).subscribe(() => {
      this.getAllOrders();
    });
  }

  addOrder() {
    this.router.navigate(['comanda', 0]);
  }

  getWorkingPlace(): number {
    return + sessionStorage.getItem(WORKING_PLACE);
  }
}
