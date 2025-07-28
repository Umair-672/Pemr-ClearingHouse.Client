import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundClaimFile } from './outbound-claim-file';

describe('OutboundClaimFile', () => {
  let component: OutboundClaimFile;
  let fixture: ComponentFixture<OutboundClaimFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutboundClaimFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundClaimFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
