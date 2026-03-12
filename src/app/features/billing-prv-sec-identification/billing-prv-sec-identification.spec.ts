import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPrvSecIdentification } from './billing-prv-sec-identification';

describe('BillingPrvSecIdentification', () => {
  let component: BillingPrvSecIdentification;
  let fixture: ComponentFixture<BillingPrvSecIdentification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingPrvSecIdentification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingPrvSecIdentification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
