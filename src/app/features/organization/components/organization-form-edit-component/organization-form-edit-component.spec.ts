import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFormEditComponent } from './organization-form-edit-component';

describe('OrganizationFormEditComponent', () => {
  let component: OrganizationFormEditComponent;
  let fixture: ComponentFixture<OrganizationFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationFormEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
