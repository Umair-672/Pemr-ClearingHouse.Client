import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPNSettings } from './vpnsettings';

describe('VPNSettings', () => {
  let component: VPNSettings;
  let fixture: ComponentFixture<VPNSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VPNSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPNSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
