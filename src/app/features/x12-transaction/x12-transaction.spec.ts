import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X12Transaction } from './x12-transaction';

describe('X12Transaction', () => {
  let component: X12Transaction;
  let fixture: ComponentFixture<X12Transaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [X12Transaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X12Transaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
