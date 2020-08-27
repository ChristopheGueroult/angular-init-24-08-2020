import { OrderI } from '../interfaces/order-i';
import { StateOrder } from '../enums/state-order.enum';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
  constructor(param?: Partial<Order>) {
    if (param) {
      Object.assign(this, param);
    }
  }
}

