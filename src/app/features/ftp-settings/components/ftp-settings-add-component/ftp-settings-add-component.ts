import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FTPSettingsService } from '../../service/ftp-settings-service';
import { FTPSettings } from '../../model/ftp-settings.model';
import { Gateway } from '../../../gateway/model/gateway.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { GatewayService } from '../../../gateway/service/gateway-service';

@Component({
  selector: 'app-ftp-settings-add-component',
  templateUrl: './ftp-settings-add-component.html',
  standalone: false
})
export class FTPSettingsAddComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(FTPSettingsService);
  private gatewayService = inject(GatewayService);
  private router = inject(Router);

  form!: FormGroup;
  gateways: Gateway[] = [];

  gatewayDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select gateway...',
    searchPlaceholder: 'Search and select gateway...',
    noResultsText: 'No gateways found',
    icon: 'bi-diagram-3',
    maxHeight: '200px',
  };

  ngOnInit(): void {
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
      isActive: [true],
      isDeleted: [false]
    });
    this.loadGateways();
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
      const item: FTPSettings = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/ftpSettings']);
        },
        error: (err) => {
          console.error('Error adding FTP settings:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
