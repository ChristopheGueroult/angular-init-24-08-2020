import { StateClient } from '../enums/state-client.enum';

export class Client {
  state = StateClient.ACTIVE;
  tva = 20;
  id: number;
  name: string;
  totalCaHt: number;
  comment: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
