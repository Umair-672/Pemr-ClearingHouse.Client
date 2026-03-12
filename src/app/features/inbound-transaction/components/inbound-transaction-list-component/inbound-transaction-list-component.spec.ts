import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTransactionListComponent } from './inbound-transaction-list-component';

describe('InboundTransactionListComponent', () => {
  let component: InboundTransactionListComponent;
  let fixture: ComponentFixture<InboundTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundTransactionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
