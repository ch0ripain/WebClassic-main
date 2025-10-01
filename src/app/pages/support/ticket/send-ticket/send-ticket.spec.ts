import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTicket } from './send-ticket';

describe('SendTicket', () => {
  let component: SendTicket;
  let fixture: ComponentFixture<SendTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendTicket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
