import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDeleteDialog } from './organization-delete-dialog';

describe('OrganizationDeleteDialog', () => {
  let component: OrganizationDeleteDialog;
  let fixture: ComponentFixture<OrganizationDeleteDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationDeleteDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationDeleteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
