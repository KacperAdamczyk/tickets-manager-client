import { Component, Input } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { DateTime } from 'luxon';
import { MatDialog } from '@angular/material';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DeleteTicket as UserDeleteTicket } from 'src/app/actions/ticket/ticket.actions';
import { DeleteTicket as AdminDeleteTicket } from 'src/app/actions/admin/admin.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent {
  @Input() ticket: Partial<ITicket>;

  get startDate(): Date {
    const startTime = DateTime.fromISO(this.ticket.route.startTime as string).valueOf();
    return DateTime.fromISO(this.ticket.startDate as string).plus(startTime).toJSDate();
  }

  get isAdmin() {
    return this.route.snapshot.data['admin'] || false;
  }

  isExpired() {

    return DateTime.fromJSDate(this.startDate).minus(Date.now()).toMillis() < 0;
  }

  deleteTicket(ticket: Partial<ITicket>) {
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
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    ) {}
}
