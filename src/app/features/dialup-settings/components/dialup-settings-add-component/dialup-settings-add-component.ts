import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialupSettingsService } from '../../service/dialup-settings-service';
import { DialupSettings } from '../../model/dialup-settings.model';

@Component({
  selector: 'app-dialup-settings-add-component',
  templateUrl: './dialup-settings-add-component.html',
  standalone: false
})
export class DialupSettingsAddComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(DialupSettingsService);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      connectionName: ['', Validators.required],
      dialingNumber: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: DialupSettings = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/dialupSettings']);
        },
        error: (err) => {
          console.error('Error adding dialup settings:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
} 