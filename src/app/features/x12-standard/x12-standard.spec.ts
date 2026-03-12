import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X12Standard } from './x12-standard';

describe('X12Standard', () => {
  let component: X12Standard;
  let fixture: ComponentFixture<X12Standard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [X12Standard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X12Standard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
