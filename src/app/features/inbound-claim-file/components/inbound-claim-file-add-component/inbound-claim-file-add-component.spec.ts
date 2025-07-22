import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundClaimFileAddComponent } from './inbound-claim-file-add-component';

describe('InboundClaimFileAddComponent', () => {
  let component: InboundClaimFileAddComponent;
  let fixture: ComponentFixture<InboundClaimFileAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundClaimFileAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundClaimFileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
