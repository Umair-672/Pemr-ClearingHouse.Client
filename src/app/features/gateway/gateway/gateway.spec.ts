import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gateway } from './gateway';

describe('Gateway', () => {
  let component: Gateway;
  let fixture: ComponentFixture<Gateway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gateway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gateway);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
