import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRoute } from './transaction-route';

describe('TransactionRoute', () => {
  let component: TransactionRoute;
  let fixture: ComponentFixture<TransactionRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
