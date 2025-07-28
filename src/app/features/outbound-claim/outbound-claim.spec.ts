import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundClaim } from './outbound-claim';

describe('OutboundClaim', () => {
  let component: OutboundClaim;
  let fixture: ComponentFixture<OutboundClaim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutboundClaim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundClaim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
