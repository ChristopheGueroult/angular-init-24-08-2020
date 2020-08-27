import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public title: string;
  public collection: Order[];
  public headers: string[];
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
    this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
        console.log(this.collection);
      }
    );
  }

  public openPopup() {
    console.log('ouvrir une popup');
  }

}
