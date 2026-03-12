import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCarrier } from './insurance-carrier';

describe('InsuranceCarrier', () => {
  let component: InsuranceCarrier;
  let fixture: ComponentFixture<InsuranceCarrier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceCarrier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceCarrier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
