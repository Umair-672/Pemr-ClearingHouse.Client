import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationEntity } from './interpretation-entity';

describe('InterpretationEntity', () => {
  let component: InterpretationEntity;
  let fixture: ComponentFixture<InterpretationEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpretationEntity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpretationEntity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
