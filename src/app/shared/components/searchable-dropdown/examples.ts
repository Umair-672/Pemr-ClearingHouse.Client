/**
 * Practical Examples: Generic Searchable Dropdown Component
 * 
 * This file contains real-world examples of how to use the searchable dropdown
 * component across different features in the Pemr-ClearingHouse application.
 */

import { DropdownConfig, DropdownOption } from './searchable-dropdown.component';

// =============================================================================
// EXAMPLE 1: User Selection Dropdown
// =============================================================================

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const userDropdownConfig: DropdownConfig = {
  displayProperty: 'fullName', // Note: You'd need to add this as a getter or computed property
  valueProperty: 'id',
  placeholder: 'Select a user...',
  searchPlaceholder: 'Search users by name or email...',
  noResultsText: 'No users found',
  icon: 'bi-person',
  maxHeight: '250px'
};

// Custom filter for user search (searches both name and email)
export const userCustomFilter = (option: DropdownOption, searchTerm: string): boolean => {
  const user = option as User;
  const term = searchTerm.toLowerCase();
  return user.firstName.toLowerCase().includes(term) ||
         user.lastName.toLowerCase().includes(term) ||
         user.email.toLowerCase().includes(term);
};

// =============================================================================
// EXAMPLE 2: Organization/Payer Selection
// =============================================================================

export interface Organization {
  id: string;
  name: string;
  code: string;
  type: 'payer' | 'provider' | 'clearinghouse';
  isActive: boolean;
}

export const organizationDropdownConfig: DropdownConfig = {
  displayProperty: 'name',
  valueProperty: 'id',
  placeholder: 'Select organization...',
  searchPlaceholder: 'Search organizations...',
  noResultsText: 'No organizations found',
  icon: 'bi-building',
  maxHeight: '300px'
};

// Filter that searches both name and code, and only shows active organizations
export const organizationCustomFilter = (option: DropdownOption, searchTerm: string): boolean => {
  const org = option as Organization;
  if (!org.isActive) return false;
  
  const term = searchTerm.toLowerCase();
  return org.name.toLowerCase().includes(term) ||
         org.code.toLowerCase().includes(term);
};

// =============================================================================
// EXAMPLE 3: Gateway Form Selection
// =============================================================================

export interface GatewayForm {
  id: string;
  name: string;
  version: string;
  description: string;
  isActive: boolean;
  lastModified: Date;
}

export const gatewayFormDropdownConfig: DropdownConfig = {
  displayProperty: 'name',
  valueProperty: 'id',
  placeholder: 'Select gateway form...',
  searchPlaceholder: 'Search gateway forms...',
  noResultsText: 'No gateway forms found',
  icon: 'bi-file-earmark-code',
  maxHeight: '200px'
};

// =============================================================================
// EXAMPLE 4: Billing Provider Selection
// =============================================================================

export interface BillingProvider {
  id: string;
  name: string;
  npi: string;
  taxId: string;
  address: string;
  isActive: boolean;
}

export const billingProviderDropdownConfig: DropdownConfig = {
  displayProperty: 'name',
  valueProperty: 'id',
  placeholder: 'Select billing provider...',
  searchPlaceholder: 'Search providers by name or NPI...',
  noResultsText: 'No billing providers found',
  icon: 'bi-hospital',
  maxHeight: '250px'
};

// Custom filter for billing provider (searches name and NPI)
export const billingProviderCustomFilter = (option: DropdownOption, searchTerm: string): boolean => {
  const provider = option as BillingProvider;
  if (!provider.isActive) return false;
  
  const term = searchTerm.toLowerCase();
  return provider.name.toLowerCase().includes(term) ||
         provider.npi.includes(searchTerm); // NPI search is case-sensitive numbers
};

// =============================================================================
// EXAMPLE 5: Subscriber Selection
// =============================================================================

export interface Subscriber {
  id: string;
  firstName: string;
  lastName: string;
  memberId: string;
  dateOfBirth: Date;
  isActive: boolean;
}

export const subscriberDropdownConfig: DropdownConfig = {
  displayProperty: 'fullName', // You'd need to add this as a computed property
  valueProperty: 'id',
  placeholder: 'Select subscriber...',
  searchPlaceholder: 'Search by name or member ID...',
  noResultsText: 'No subscribers found',
  icon: 'bi-person-badge',
  maxHeight: '250px'
};

// Custom filter for subscriber search
export const subscriberCustomFilter = (option: DropdownOption, searchTerm: string): boolean => {
  const subscriber = option as Subscriber;
  if (!subscriber.isActive) return false;
  
  const term = searchTerm.toLowerCase();
  return subscriber.firstName.toLowerCase().includes(term) ||
         subscriber.lastName.toLowerCase().includes(term) ||
         subscriber.memberId.toLowerCase().includes(term);
};

// =============================================================================
// USAGE EXAMPLES IN COMPONENTS
// =============================================================================

/*
// Example Component Implementation:

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownOption } from '../../../shared/components/searchable-dropdown/searchable-dropdown.component';
import { userDropdownConfig, userCustomFilter } from '../../../shared/components/searchable-dropdown/examples';

@Component({
  selector: 'app-example-form',
  template: `
    <form [formGroup]="exampleForm">
      <!-- User Selection -->
      <div class="form-group mb-3">
        <label for="userId" class="fw-semibold mb-1">Assign to User</label>
        <app-searchable-dropdown
          [options]="users"
          [config]="userDropdownConfig"
          [customFilter]="userCustomFilter"
          formControlName="userId"
          (selectionChange)="onUserSelectionChange($event)"
          [ngClass]="{'is-invalid': exampleForm.get('userId')?.invalid && exampleForm.get('userId')?.touched}"
        ></app-searchable-dropdown>
        <div *ngIf="exampleForm.get('userId')?.invalid && exampleForm.get('userId')?.touched" class="invalid-feedback d-block">
          Please select a user.
        </div>
      </div>
      
      <!-- Organization Selection -->
      <div class="form-group mb-3">
        <label for="organizationId" class="fw-semibold mb-1">Organization</label>
        <app-searchable-dropdown
          [options]="organizations"
          [config]="organizationDropdownConfig"
          [customFilter]="organizationCustomFilter"
          formControlName="organizationId"
          (selectionChange)="onOrganizationSelectionChange($event)"
        ></app-searchable-dropdown>
      </div>
    </form>
  `
})
export class ExampleFormComponent implements OnInit {
  exampleForm!: FormGroup;
  users: User[] = [];
  organizations: Organization[] = [];
  
  // Import the configurations
  userDropdownConfig = userDropdownConfig;
  organizationDropdownConfig = organizationDropdownConfig;
  userCustomFilter = userCustomFilter;
  organizationCustomFilter = organizationCustomFilter;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      userId: ['', Validators.required],
      organizationId: ['', Validators.required]
    });
    
    this.loadUsers();
    this.loadOrganizations();
  }

  onUserSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const user = selectedOption as User;
      console.log('Selected user:', user.firstName, user.lastName);
    }
  }

  onOrganizationSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const org = selectedOption as Organization;
      console.log('Selected organization:', org.name);
    }
  }

  private loadUsers(): void {
    // Load users from your service
    // this.userService.getAll().subscribe(users => this.users = users);
  }

  private loadOrganizations(): void {
    // Load organizations from your service
    // this.organizationService.getAll().subscribe(orgs => this.organizations = orgs);
  }
}
*/

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Helper function to add computed properties for display
 */
export function addComputedDisplayProperties<T extends Record<string, any>>(
  items: T[],
  computeDisplay: (item: T) => string
): (T & { displayName: string })[] {
  return items.map(item => ({
    ...item,
    displayName: computeDisplay(item)
  }));
}

/**
 * Example usage of helper function:
 * 
 * const usersWithDisplayNames = addComputedDisplayProperties(
 *   users,
 *   user => `${user.firstName} ${user.lastName} (${user.email})`
 * );
 * 
 * // Then use 'displayName' as the displayProperty in your config
 */
