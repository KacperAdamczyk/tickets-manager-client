import { Component, OnInit, Input } from '@angular/core';
import { ITicket } from 'src/app/models/ticket.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  @Input() ticket$: Observable<ITicket>;

  constructor() { }

  ngOnInit() {
  }

}
