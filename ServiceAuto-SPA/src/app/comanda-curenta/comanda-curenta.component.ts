import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDataService } from '../services/OrderData.service';
import { Order } from '../lista-comenzi-todo/lista-comenzi-todo.component';

@Component({
  selector: 'app-comanda-curenta',
  templateUrl: './comanda-curenta.component.html',
  styleUrls: ['./comanda-curenta.component.css']
})
export class ComandaCurentaComponent implements OnInit {

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
      this.orderData.retrieveOrderForUser(this.id).subscribe(
        data => {
          if (data != null) {
            this.order = data;
          }
        }
      );
    }

  }

  completeOrder() {
    this.order.completata = 1;
    this.orderData.inchideComanda(this.id, this.order).subscribe(
      data => {
        this.order = data;
        this.router.navigate(['comenzi-todo']);
      });
  }
}
