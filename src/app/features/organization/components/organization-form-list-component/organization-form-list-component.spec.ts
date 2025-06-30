import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFormListComponent } from './organization-form-list-component';

describe('OrganizationFormListComponent', () => {
  let component: OrganizationFormListComponent;
  let fixture: ComponentFixture<OrganizationFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationFormListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
