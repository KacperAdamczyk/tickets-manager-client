import { Component, Input } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent {
  @Input() ticket: ITicket;
}
