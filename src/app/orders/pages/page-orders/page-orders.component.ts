import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit, OnDestroy {
  public title: string;
  public collection: Order[];
  public headers: string[];
  private sub: Subscription;
  constructor(
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.headers = [
      'Type',
      'Client',
      'Nb. J',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.title = 'All orders';
    this.sub = this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
      }
    );
  }

  public openPopup() {
    console.log('ouvrir une popup');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
