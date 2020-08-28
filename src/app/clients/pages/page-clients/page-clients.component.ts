import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);
  public title: string;
  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.title = 'All clients';
    this.collection$ = this.cs.collection;
    this.headers = [
      'Name',
      'Total HT',
      'Tva',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

}
