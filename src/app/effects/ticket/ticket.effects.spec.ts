import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TicketEffects } from './ticket.effects';

describe('TicketEffects', () => {
  let actions$: Observable<any>;
  let effects: TicketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TicketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
