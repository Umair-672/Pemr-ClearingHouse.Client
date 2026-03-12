import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProviderListComponent } from './billing-provider-list-component';

describe('BillingProviderListComponent', () => {
  let component: BillingProviderListComponent;
  let fixture: ComponentFixture<BillingProviderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingProviderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
