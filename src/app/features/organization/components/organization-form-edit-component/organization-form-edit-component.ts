import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../services/organization-service';
import { IOrganization } from '../../model/organization.model';

@Component({
  selector: 'app-organization-form-edit-component',
  standalone: false,
  templateUrl: './organization-form-edit-component.html',
  styleUrl: './organization-form-edit-component.scss'
})
export class OrganizationFormEditComponent implements OnInit {
  organizationForm!: FormGroup;
  organizationId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private organizationService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.organizationId = this.route.snapshot.paramMap.get('id') || '';
    this.organizationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      isActive: [true],
      createdAt: [Date],
      updatedAt: [Date],
      createdBy: ['admin'],
      updatedBy: ['admin']
    });

    if (this.organizationId) {
      this.loading = true;
      this.organizationService.getById(this.organizationId).subscribe({
        next: (org: IOrganization) => {
          this.organizationForm.patchValue(org);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.organizationForm.valid) {
      const updatedOrganization = this.organizationForm.value;
      this.organizationService.update(this.organizationId, updatedOrganization).subscribe({
        next: () => {
          this.router.navigate(['/organizations']);
        },
        error: (err) => {
          console.error('Error updating organization:', err);
        }
      });
    } else {
      this.organizationForm.markAllAsTouched();
    }
  }
}
