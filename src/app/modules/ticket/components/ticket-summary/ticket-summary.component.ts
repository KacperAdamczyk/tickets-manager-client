import { Component } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

import { State as DashboardState } from 'src/app/reducers/dashboard/dashboard.reducer';
import { CreateTicket } from 'src/app/actions/ticket/ticket.actions';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styleUrls: ['./ticket-summary.component.scss']
})
export class TicketSummaryComponent {
  ticket$: Observable<Partial<ITicket>> = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => ({
      route: {
        ...dashboard.selectedRoute,
        sourceAirport: dashboard.selectedFrom,
        destinationAirport: dashboard.selectedTo,
      },
      startDate: dashboard.startDate as Date,
    }))
  );

  constructor(private store: Store<AppState>) {}

  createTicket(ticket: ITicket) {
    const startDate = DateTime.fromJSDate(ticket.startDate as Date).startOf('day').toJSDate();

    this.store.dispatch(new CreateTicket({
      routeId: ticket.route._id,
      startDate,
    }));
  }

}
