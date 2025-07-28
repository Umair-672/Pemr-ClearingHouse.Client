import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimStatus } from './claim-status';

describe('ClaimStatus', () => {
  let component: ClaimStatus;
  let fixture: ComponentFixture<ClaimStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
