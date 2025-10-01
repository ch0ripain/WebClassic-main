import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReport } from './send-report';

describe('SendReport', () => {
  let component: SendReport;
  let fixture: ComponentFixture<SendReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
