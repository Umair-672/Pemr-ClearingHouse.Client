import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialupSettingsService } from '../../service/dialup-settings-service';
import { DialupSettings } from '../../model/dialup-settings.model';

@Component({
  selector: 'app-dialup-settings-edit-component',
  templateUrl: './dialup-settings-edit-component.html',
  standalone: false
})
export class DialupSettingsEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(DialupSettingsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup;
  itemId!: string;
  loading = false;

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      connectionName: ['', Validators.required],
      dialingNumber: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: DialupSettings) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/dialupSettings']);
        },
        error: (err) => {
          console.error('Error updating dialup settings:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
} 