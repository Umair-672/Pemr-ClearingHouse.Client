import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundClaimFileEditComponent } from './inbound-claim-file-edit-component';

describe('InboundClaimFileEditComponent', () => {
  let component: InboundClaimFileEditComponent;
  let fixture: ComponentFixture<InboundClaimFileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundClaimFileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundClaimFileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
