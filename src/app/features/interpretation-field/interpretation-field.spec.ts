import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationField } from './interpretation-field';

describe('InterpretationField', () => {
  let component: InterpretationField;
  let fixture: ComponentFixture<InterpretationField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretationField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpretationField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
