import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { X12StandardService } from '../../service/x12-standard-service';
import { X12Standard } from '../../model/x12-standard.model';

@Component({
  selector: 'app-x12-standard-form-edit-component',
  templateUrl: './x12-standard-form-edit-component.html',
  standalone: false
})
export class X12StandardFormEditComponent implements OnInit {
  x12StandardForm!: FormGroup;
  x12StandardId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private x12StandardService: X12StandardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.x12StandardId = this.route.snapshot.paramMap.get('id') || '';
    this.x12StandardForm = this.fb.group({
      name: ['', Validators.required]
    });
    if (this.x12StandardId) {
      this.loading = true;
      this.x12StandardService.getById(this.x12StandardId).subscribe({
        next: (x12Standard: X12Standard) => {
          this.x12StandardForm.patchValue(x12Standard);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.x12StandardForm.valid) {
      const updatedX12Standard = this.x12StandardForm.value;
      this.x12StandardService.update(this.x12StandardId, updatedX12Standard).subscribe({
        next: () => {
          this.router.navigate(['/x12Standard']);
        },
        error: (err) => {
          console.error('Error updating x12 standard:', err);
        }
      });
    } else {
      this.x12StandardForm.markAllAsTouched();
    }
  }
} 