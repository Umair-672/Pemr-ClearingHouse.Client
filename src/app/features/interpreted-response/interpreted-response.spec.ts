import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretedResponse } from './interpreted-response';

describe('InterpretedResponse', () => {
  let component: InterpretedResponse;
  let fixture: ComponentFixture<InterpretedResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretedResponse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpretedResponse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
