import { Component } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

import { State as DashboardState } from 'src/app/reducers/dashboard/dashboard.reducer';
import { CreateTicket } from 'src/app/actions/dashboard/dashboard.actions';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  ticket$: Observable<Partial<ITicket>> = this.store.pipe(
    select('dashboard'),
    map((dashboard: DashboardState) => ({
      sourceAirport: dashboard.selectedFrom,
      destinationAirport: dashboard.selectedTo,
      route: dashboard.selectedRoute,
      startDate: dashboard.startDate,
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
