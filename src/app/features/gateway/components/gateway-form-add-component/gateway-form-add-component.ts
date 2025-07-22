import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatewayService } from '../../service/gateway-service';
import { Router } from '@angular/router';
import { Gateway } from '../../model/gateway.model';

@Component({
  selector: 'app-gateway-form-add-component',
  templateUrl: './gateway-form-add-component.html',
  standalone: false
})
export class GatewayFormAddComponent implements OnInit {
  gatewayForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gatewayService: GatewayService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gatewayForm = this.fb.group({
      name: ['', Validators.required],
      gatewayType: ['', Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
  }

  onSubmit(): void {
    if (this.gatewayForm.valid) {
      const gateway: Gateway = this.gatewayForm.value;
      this.gatewayService.create(gateway).subscribe({
        next: () => {
          this.gatewayForm.reset();
          this.router.navigate(['/gateway']);
        },
        error: (err) => {
          console.error('Error adding gateway:', err);
        }
      });
    } else {
      this.gatewayForm.markAllAsTouched();
    }
  }
}
