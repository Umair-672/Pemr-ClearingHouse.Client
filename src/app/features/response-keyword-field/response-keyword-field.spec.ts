import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseKeywordField } from './response-keyword-field';

describe('ResponseKeywordField', () => {
  let component: ResponseKeywordField;
  let fixture: ComponentFixture<ResponseKeywordField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponseKeywordField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseKeywordField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
