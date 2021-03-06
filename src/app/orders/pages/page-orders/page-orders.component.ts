import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
  public title: string;
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  // private sub: Subscription;
  constructor(
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.headers = [
      'Action',
      'Type',
      'Client',
      'Nb. J',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.title = 'All orders';
    this.collection$ = this.os.collection;
  }

  public openPopup() {
    console.log('ouvrir une popup');
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe(
      (res) => {
        item.state = res.state;
      }
    );
  }

  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
