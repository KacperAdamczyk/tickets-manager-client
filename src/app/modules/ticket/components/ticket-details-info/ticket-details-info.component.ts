import { Component, Input } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';

@Component({
  selector: 'app-ticket-details-info',
  templateUrl: './ticket-details-info.component.html',
  styleUrls: ['./ticket-details-info.component.scss']
})
export class TicketDetailsInfoComponent {
  @Input() ticket: ITicket;
}
