import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatioBar } from './navigatio-bar';

describe('NavigatioBar', () => {
  let component: NavigatioBar;
  let fixture: ComponentFixture<NavigatioBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatioBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatioBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
