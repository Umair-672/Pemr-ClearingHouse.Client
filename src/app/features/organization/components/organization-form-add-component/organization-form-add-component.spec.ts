import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFormAddComponent } from './organization-form-add-component';

describe('OrganizationFormAddComponent', () => {
  let component: OrganizationFormAddComponent;
  let fixture: ComponentFixture<OrganizationFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationFormAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
