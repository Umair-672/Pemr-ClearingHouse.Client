import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTTransactionSettings } from './rttransaction-settings';

describe('RTTransactionSettings', () => {
  let component: RTTransactionSettings;
  let fixture: ComponentFixture<RTTransactionSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RTTransactionSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTTransactionSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
