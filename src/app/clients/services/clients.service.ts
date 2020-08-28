import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${environment.urlApi}/clients`);
  }

  // get collection()
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection()
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  // changeState of item in collection
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.urlApi}/clients/${item.id}`, item);
  }

}
