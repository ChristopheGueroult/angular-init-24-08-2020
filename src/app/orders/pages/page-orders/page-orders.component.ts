import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'All orders';
  }

}
