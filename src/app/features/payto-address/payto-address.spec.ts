import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytoAddress } from './payto-address';

describe('PaytoAddress', () => {
  let component: PaytoAddress;
  let fixture: ComponentFixture<PaytoAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaytoAddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaytoAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
