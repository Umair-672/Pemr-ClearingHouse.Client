import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTransactionAddComponent } from './inbound-transaction-add-component';

describe('InboundTransactionAddComponent', () => {
  let component: InboundTransactionAddComponent;
  let fixture: ComponentFixture<InboundTransactionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundTransactionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundTransactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
