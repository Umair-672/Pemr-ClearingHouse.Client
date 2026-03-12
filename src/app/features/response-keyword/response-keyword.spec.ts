import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseKeyword } from './response-keyword';

describe('ResponseKeyword', () => {
  let component: ResponseKeyword;
  let fixture: ComponentFixture<ResponseKeyword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponseKeyword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseKeyword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
