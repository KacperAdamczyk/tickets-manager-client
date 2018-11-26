import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket } from 'src/app/models/ticket.interface';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {
  @Input() tickets$: Observable<ITicket[]>;
  @Input() isPending$: Observable<boolean>;
}
