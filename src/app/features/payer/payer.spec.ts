import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payer } from './payer';

describe('Payer', () => {
  let component: Payer;
  let fixture: ComponentFixture<Payer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Payer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Payer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
