import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersService } from './services/orders.service';



@NgModule({
  declarations: [PageOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
