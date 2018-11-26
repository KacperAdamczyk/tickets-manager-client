import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AppState } from 'src/app/reducers';
import { ITicket } from 'src/app/models/ticket.interface';
import { GetTicket, DeleteTicket } from 'src/app/actions/ticket/ticket.actions';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';

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

  deleteTicket(ticket: ITicket) {
    const dialogRef = this.dialog.open(DeleteTicketModalComponent);

    const sub = dialogRef.afterClosed().pipe(
      filter(result => result),
    )
    .subscribe(() => {
      this.store.dispatch(new DeleteTicket({ id: ticket.id }));
      this.router.navigateByUrl('/tickets');

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
