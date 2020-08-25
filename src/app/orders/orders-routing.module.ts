import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';

const routes: Routes = [
  { path: '', component: PageOrdersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
