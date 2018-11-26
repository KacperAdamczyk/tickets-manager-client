import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { GetTickets } from 'src/app/actions/ticket/ticket.actions';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit {
  tickets$ = this.store.pipe(
    select('ticket', 'tickets'),
  );

  ticketsPending$ = this.store.pipe(
    select('ticket', 'getTicketsPending'),
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetTickets);
  }

}
