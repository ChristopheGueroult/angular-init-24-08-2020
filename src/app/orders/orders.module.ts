import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';



@NgModule({
  declarations: [PageOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
