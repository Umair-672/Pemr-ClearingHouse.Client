import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProvider } from './billing-provider';

describe('BillingProvider', () => {
  let component: BillingProvider;
  let fixture: ComponentFixture<BillingProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
