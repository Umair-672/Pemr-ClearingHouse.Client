import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretedResponseField } from './interpreted-response-field';

describe('InterpretedResponseField', () => {
  let component: InterpretedResponseField;
  let fixture: ComponentFixture<InterpretedResponseField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretedResponseField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpretedResponseField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
