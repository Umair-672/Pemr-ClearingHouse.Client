import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriber } from './subscriber';

describe('Subscriber', () => {
  let component: Subscriber;
  let fixture: ComponentFixture<Subscriber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subscriber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscriber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
