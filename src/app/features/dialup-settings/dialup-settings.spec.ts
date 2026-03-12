import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialupSettings } from './dialup-settings';

describe('DialupSettings', () => {
  let component: DialupSettings;
  let fixture: ComponentFixture<DialupSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialupSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialupSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
