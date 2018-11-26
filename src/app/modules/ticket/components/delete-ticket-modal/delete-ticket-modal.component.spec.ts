import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketModalComponent } from './delete-ticket-modal.component';

describe('DeleteTicketModalComponent', () => {
  let component: DeleteTicketModalComponent;
  let fixture: ComponentFixture<DeleteTicketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTicketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
