import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundClaimFileListComponent } from './inbound-claim-file-list-component';

describe('InboundClaimFileListComponent', () => {
  let component: InboundClaimFileListComponent;
  let fixture: ComponentFixture<InboundClaimFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundClaimFileListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboundClaimFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
