import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDataService } from '../services/OrderData.service';
import { Order } from '../lista-comenzi-todo/lista-comenzi-todo.component';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  id: number;
  order: Order;

  constructor(
    private orderData: OrderDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    this.order = new Order(this.id, '', '', '', '', 0, 0, '');


    if (this.id != 0) {
      this.orderData.retrieveOrder(this.id).subscribe(
        data => this.order = data
      );
    }

  }

  saveOrder() {
    console.log(this.order);
    if(this.id == 0) {
        this.orderData.createOrder(this.order).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['comenzi-todo']);
        });
    } else {
        console.log(this.order);
        this.orderData.updateOrder(this.id, this.order).subscribe(
        data => {
          this.order = data;
          this.router.navigate(['comenzi-todo']);
        });
    }
  }
}
