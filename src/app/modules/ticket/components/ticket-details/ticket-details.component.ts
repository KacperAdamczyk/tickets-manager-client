import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';
import { ITicket } from 'src/app/models/ticket.interface';
import { GetTicket, DeleteTicket as UserDeleteTicket } from 'src/app/actions/ticket/ticket.actions';
import { DeleteTicket as AdminDeleteTicket } from 'src/app/actions/admin/admin.actions';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit, OnDestroy {
  ticket$: Observable<ITicket> = this.store.pipe(
    select('ticket', 'ticket'),
    filter(ticket => !!ticket),
    map(ticket => {
      const startTime = DateTime.fromISO(ticket.route.startTime as string);
      const startDate = DateTime.fromISO(ticket.startDate as string).plus(startTime.toMillis());
      const endTime = DateTime.fromISO(ticket.route.endTime as string);
      const endDate = DateTime.fromISO(ticket.startDate as string).plus(endTime.toMillis());

      return {
        ...ticket,
        route: {
          ...ticket.route,
          startDate: startDate.toJSDate(),
          endDate: endDate.toJSDate(),
        },
      };
    })
  );

  paramsSubscription: Subscription;

  get isAdmin() {
    return this.route.snapshot.data['admin'] || false;
  }

  deleteTicket(ticket: ITicket) {
    const dialogRef = this.dialog.open(DeleteTicketModalComponent);

    const sub = dialogRef.afterClosed().pipe(
      filter(result => result),
    )
    .subscribe(() => {
      const Action = this.isAdmin ? AdminDeleteTicket : UserDeleteTicket;
      this.store.dispatch(new Action({ id: ticket.id }));
      this.router.navigateByUrl(this.isAdmin ? 'admin' : 'tickets');

      sub.unsubscribe();
    });
  }

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.paramMap.subscribe(params => this.store.dispatch(
      new GetTicket({ id: params.get('id') })
    ));
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
