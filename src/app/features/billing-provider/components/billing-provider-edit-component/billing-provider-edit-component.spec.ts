import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProviderEditComponent } from './billing-provider-edit-component';

describe('BillingProviderEditComponent', () => {
  let component: BillingProviderEditComponent;
  let fixture: ComponentFixture<BillingProviderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingProviderEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingProviderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
