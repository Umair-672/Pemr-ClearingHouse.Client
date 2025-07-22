import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTransaction } from './inbound-transaction';

describe('InboundTransaction', () => {
  let component: InboundTransaction;
  let fixture: ComponentFixture<InboundTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundTransaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
