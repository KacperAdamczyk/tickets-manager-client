import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

import { ActivatedRoute } from '@angular/router';
import { GetTicket } from 'src/app/actions/ticket/ticket.actions';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
  ticket$: Observable<ITicket> = this.store.pipe(
    select('ticket', 'ticket')
  );

  paramsSubscription: Subscription;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(params => this.store.dispatch(
      new GetTicket({ id: params.get('id') })
    ));
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
