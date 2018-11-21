import { Component, Input } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-ticket-list-item',
  templateUrl: './ticket-list-item.component.html',
  styleUrls: ['./ticket-list-item.component.scss']
})
export class TicketListItemComponent {
  @Input() ticket: Partial<ITicket>;

  get startDate(): string {
    const startTime = DateTime.fromISO(this.ticket.route.startTime as string).valueOf();
    return DateTime.fromISO(this.ticket.startDate as string).plus(startTime).toLocaleString(DateTime.DATETIME_SHORT);
  }

  get ticketUrl(): string[] {
    return [`tickets/${this.ticket.id}`];
  }
}
