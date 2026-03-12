import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundClaimFile } from './inbound-claim-file';

describe('InboundClaimFile', () => {
  let component: InboundClaimFile;
  let fixture: ComponentFixture<InboundClaimFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundClaimFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundClaimFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
