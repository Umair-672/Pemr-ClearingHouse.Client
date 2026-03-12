import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimEntityService } from '../../service/claim-entity-service';
import { ClaimEntity } from '../../model/claim-entity.model';
import { Claim } from '../../../claim/model/claim.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { ClaimService } from '../../../claim/service/claim-service';

@Component({
  selector: 'app-claim-entity-edit-component',
  templateUrl: './claim-entity-edit-component.html',
  standalone: false
})
export class ClaimEntityEditComponent implements OnInit {
  form!: FormGroup;
  itemId!: string;
  loading = false;
  claims: Claim[] = [];

  constructor(
    private fb: FormBuilder,
    private service: ClaimEntityService,
    private claimService: ClaimService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
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
    if (this.itemId) {
      this.loading = true;
      this.service.getById(this.itemId).subscribe({
        next: (item: ClaimEntity) => {
          this.form.patchValue(item);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
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
      const updatedItem = this.form.value;
      this.service.update(this.itemId, updatedItem).subscribe({
        next: () => {
          this.router.navigate(['/claimEntity']);
        },
        error: (err) => {
          console.error('Error updating claim entity:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
