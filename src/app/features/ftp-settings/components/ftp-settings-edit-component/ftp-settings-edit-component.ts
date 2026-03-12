import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FTPSettingsService } from '../../service/ftp-settings-service';
import { FTPSettings } from '../../model/ftp-settings.model';
import { Gateway } from '../../../gateway/model/gateway.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { GatewayService } from '../../../gateway/service/gateway-service';

@Component({
  selector: 'app-ftp-settings-edit-component',
  templateUrl: './ftp-settings-edit-component.html',
  standalone: false
})
export class FTPSettingsEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(FTPSettingsService);
  private gatewayService = inject(GatewayService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form!: FormGroup;
  itemId!: string;
  loading = false;
  gateways: Gateway[] = [];


  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.form = this.fb.group({
      gatewayID: ['', Validators.required],
      submitterID: ['', Validators.required],
      url: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      claimDir: ['', Validators.required],
      claimStatusDir: ['', Validators.required],
      eligibilityDir: ['', Validators.required],
      eraDir: ['', Validators.required],
      outboundFileType: ['', Validators.required],
      inboundFileType: ['', Validators.required],
      encryptionPublicKey: ['', Validators.required],
      encryptionPrivateKey: ['', Validators.required],
      isActive: [false],
      isDeleted: [false]
    });
    this.loadGateways();
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: FTPSettings) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadGateways(): void {
    this.gatewayService.getAll().subscribe({
      next: (gateways: Gateway[]) => {
        this.gateways = gateways;
      },
      error: (err: any) => {
        // Handle error (show message, etc.)
      }
    });
  }

  onGatewaySelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedGateway = selectedOption as Gateway;
      this.form.get('gatewayID')?.setValue(selectedGateway.id);
    } else {
      this.form.get('gatewayID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/ftpSettings']);
        },
        error: (err) => {
          console.error('Error updating FTP settings:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
