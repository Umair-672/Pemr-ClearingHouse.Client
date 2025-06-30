import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from '../../services/organization-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-form-add-component',
  standalone: false,
  templateUrl: './organization-form-add-component.html',
  styleUrl: './organization-form-add-component.scss',
  providers: [], // Provide the service at the component level
})
export class OrganizationFormAddComponent {
  organizationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private organizationService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.organizationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      isActive: [true],
      createdAt: [Date],
      updatedAt: [Date],
      createdBy: ['admin'],
      updatedBy: ['admin'],
    });
  }

  onSubmit(): void {
    if (this.organizationForm.valid) {
      const organizationData = this.organizationForm.value;
      this.organizationService.create(organizationData).subscribe({
        next: () => {
          this.organizationForm.reset();
          this.router.navigate(['/organizations']);
        },
        error: (err) => {
          console.error('Error adding organization:', err);
        },
      });
    } else {
      this.organizationForm.markAllAsTouched();
    }
  }
}
