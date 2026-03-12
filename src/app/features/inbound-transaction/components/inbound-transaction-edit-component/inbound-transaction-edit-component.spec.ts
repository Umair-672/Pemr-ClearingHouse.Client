import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundTransactionEditComponent } from './inbound-transaction-edit-component';

describe('InboundTransactionEditComponent', () => {
  let component: InboundTransactionEditComponent;
  let fixture: ComponentFixture<InboundTransactionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundTransactionEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundTransactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
