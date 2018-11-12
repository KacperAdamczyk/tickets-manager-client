import { Component, Input } from '@angular/core';

type Statuses = 'success' | 'error';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input()
  status: Statuses = 'success';
}
