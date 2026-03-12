import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from '../../service/insurance-service';
import { Insurance } from '../../model/insurance.model';

@Component({
  selector: 'app-insurance-form-edit-component',
  templateUrl: './insurance-form-edit-component.html',
  standalone: false
})
export class InsuranceFormEditComponent implements OnInit {
  insuranceForm!: FormGroup;
  insuranceId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private insuranceService: InsuranceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.insuranceId = this.route.snapshot.paramMap.get('id') || '';
    this.insuranceForm = this.fb.group({
      name: ['', Validators.required],
      insuranceType: ['', Validators.required],
      filingIndicator: ['', Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
    if (this.insuranceId) {
      this.loading = true;
      this.insuranceService.getById(this.insuranceId).subscribe({
        next: (insurance: Insurance) => {
          this.insuranceForm.patchValue(insurance);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.insuranceForm.valid) {
      const updatedInsurance = this.insuranceForm.value;
      this.insuranceService.update(this.insuranceId, updatedInsurance).subscribe({
        next: () => {
          this.router.navigate(['/insurance']);
        },
        error: (err) => {
          console.error('Error updating insurance:', err);
        }
      });
    } else {
      this.insuranceForm.markAllAsTouched();
    }
  }
} 