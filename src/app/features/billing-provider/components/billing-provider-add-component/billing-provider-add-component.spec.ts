import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProviderAddComponent } from './billing-provider-add-component';

describe('BillingProviderAddComponent', () => {
  let component: BillingProviderAddComponent;
  let fixture: ComponentFixture<BillingProviderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingProviderAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingProviderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
