import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimEntityService } from '../../service/claim-entity-service';
import { ClaimEntity } from '../../model/claim-entity.model';
import { Claim } from '../../../claim/model/claim.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { ClaimService } from '../../../claim/service/claim-service';

@Component({
  selector: 'app-claim-entity-add-component',
  templateUrl: './claim-entity-add-component.html',
  standalone: false
})
export class ClaimEntityAddComponent implements OnInit {
  form!: FormGroup;
  claims: Claim[] = [];

  claimDropdownConfig: DropdownConfig = {
    displayProperty: 'patientControlNumber',
    valueProperty: 'id',
    placeholder: 'Select claim...',
    searchPlaceholder: 'Search and select claim...',
    noResultsText: 'No claims found',
    icon: 'bi-file-earmark-text',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private service: ClaimEntityService,
    private claimService: ClaimService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      claimID: ['', Validators.required],
      entityCode: ['', Validators.required],
      entityTypeQualifier: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      primaryIdentification: [''],
      secondaryIdentification: [''],
      taxonomyCode: ['']
    });
    this.loadClaims();
  }

  loadClaims(): void {
    this.claimService.getAll().subscribe({
      next: (claims: Claim[]) => {
        this.claims = claims;
      },
      error: err => {
        // Handle error (show message, etc.)
      }
    });
  }

  onClaimSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedClaim = selectedOption as Claim;
      this.form.get('claimID')?.setValue(selectedClaim.id);
    } else {
      this.form.get('claimID')?.setValue(null);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const item: ClaimEntity = this.form.value;
      this.service.create(item).subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/claimEntity']);
        },
        error: (err) => {
          console.error('Error adding claim entity:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
