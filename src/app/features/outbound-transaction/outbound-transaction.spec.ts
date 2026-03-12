import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundTransaction } from './outbound-transaction';

describe('OutboundTransaction', () => {
  let component: OutboundTransaction;
  let fixture: ComponentFixture<OutboundTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutboundTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundTransaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
