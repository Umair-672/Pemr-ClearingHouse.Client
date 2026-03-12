import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayService } from '../../service/gateway-service';
import { Gateway } from '../../model/gateway.model';

@Component({
  selector: 'app-gateway-form-edit-component',
  templateUrl: './gateway-form-edit-component.html',
  standalone: false
})
export class GatewayFormEditComponent implements OnInit {
  gatewayForm!: FormGroup;
  gatewayId!: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private gatewayService: GatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gatewayId = this.route.snapshot.paramMap.get('id') || '';
    this.gatewayForm = this.fb.group({
      name: ['', Validators.required],
      gatewayType: ['', Validators.required],
      isActive: [true],
      isDeleted: [false]
    });
    if (this.gatewayId) {
      this.loading = true;
      this.gatewayService.getById(this.gatewayId).subscribe({
        next: (gateway: Gateway) => {
          this.gatewayForm.patchValue(gateway);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.gatewayForm.valid) {
      const updatedGateway = this.gatewayForm.value;
      this.gatewayService.update(this.gatewayId, updatedGateway).subscribe({
        next: () => {
          this.router.navigate(['/gateway']);
        },
        error: (err) => {
          console.error('Error updating gateway:', err);
        }
      });
    } else {
      this.gatewayForm.markAllAsTouched();
    }
  }
}
