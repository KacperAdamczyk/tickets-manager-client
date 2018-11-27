import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTicketsComponent } from './users-tickets.component';

describe('UsersTicketsComponent', () => {
  let component: UsersTicketsComponent;
  let fixture: ComponentFixture<UsersTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
