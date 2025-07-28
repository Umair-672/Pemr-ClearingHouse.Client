import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTPSettings } from './ftpsettings';

describe('FTPSettings', () => {
  let component: FTPSettings;
  let fixture: ComponentFixture<FTPSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FTPSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FTPSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
