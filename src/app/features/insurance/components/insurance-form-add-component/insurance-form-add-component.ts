import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '../../service/insurance-service';
import { Router } from '@angular/router';
import { Insurance } from '../../model/insurance.model';

@Component({
  selector: 'app-insurance-form-add-component',
  templateUrl: './insurance-form-add-component.html',
  standalone: false
})
export class InsuranceFormAddComponent implements OnInit {
  insuranceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private insuranceService: InsuranceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.insuranceForm = this.fb.group({
      name: ['', Validators.required],
      insuranceType: ['', Validators.required],
      filingIndicator: ['', Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
  }

  onSubmit(): void {
    if (this.insuranceForm.valid) {
      const insurance: Insurance = this.insuranceForm.value;
      this.insuranceService.create(insurance).subscribe({
        next: () => {
          this.insuranceForm.reset();
          this.router.navigate(['/insurance']);
        },
        error: (err) => {
          console.error('Error adding insurance:', err);
        }
      });
    } else {
      this.insuranceForm.markAllAsTouched();
    }
  }
} 