import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimEntity } from './claim-entity';

describe('ClaimEntity', () => {
  let component: ClaimEntity;
  let fixture: ComponentFixture<ClaimEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimEntity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimEntity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
