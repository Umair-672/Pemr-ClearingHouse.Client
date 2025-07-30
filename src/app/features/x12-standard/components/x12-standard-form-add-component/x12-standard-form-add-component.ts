import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { X12StandardService } from '../../service/x12-standard-service';
import { Router } from '@angular/router';
import { X12Standard } from '../../model/x12-standard.model';

@Component({
  selector: 'app-x12-standard-form-add-component',
  templateUrl: './x12-standard-form-add-component.html',
  standalone: false
})
export class X12StandardFormAddComponent implements OnInit {
  x12StandardForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private x12StandardService: X12StandardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.x12StandardForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.x12StandardForm.valid) {
      const x12Standard: X12Standard = this.x12StandardForm.value;
      this.x12StandardService.create(x12Standard).subscribe({
        next: () => {
          this.x12StandardForm.reset();
          this.router.navigate(['/x12Standard']);
        },
        error: (err) => {
          console.error('Error adding x12 standard:', err);
        }
      });
    } else {
      this.x12StandardForm.markAllAsTouched();
    }
  }
} 