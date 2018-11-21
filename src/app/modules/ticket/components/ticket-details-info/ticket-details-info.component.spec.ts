import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsInfoComponent } from './ticket-details-info.component';

describe('TicketDetailsInfoComponent', () => {
  let component: TicketDetailsInfoComponent;
  let fixture: ComponentFixture<TicketDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
