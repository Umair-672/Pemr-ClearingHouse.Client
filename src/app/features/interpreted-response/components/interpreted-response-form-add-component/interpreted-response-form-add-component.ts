import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterpretedResponseService } from '../../service/interpreted-response-service';
import { ClaimStatusService } from '../../../claim-status/service/claim-status-service';
import { ResponseKeywordService } from '../../../response-keyword/service/response-keyword-service';
import { Router } from '@angular/router';
import { InterpretedResponse } from '../../model/interpreted-response.model';
import { ClaimStatus } from '../../../claim-status/model/claim-status.model';
import { ResponseKeyword } from '../../../response-keyword/model/response-keyword.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-interpreted-response-form-add-component',
  templateUrl: './interpreted-response-form-add-component.html',
  standalone: false
})
export class InterpretedResponseFormAddComponent implements OnInit {
  interpretedResponseForm!: FormGroup;
  claimStatuses: ClaimStatus[] = [];
  responseKeywords: ResponseKeyword[] = [];

  claimStatusDropdownConfig: DropdownConfig = {
    displayProperty: 'status',
    valueProperty: 'id',
    placeholder: 'Select claim status...',
    searchPlaceholder: 'Search and select claim status...',
    noResultsText: 'No claim statuses found',
    icon: 'bi-check-circle',
    maxHeight: '200px',
  };

  responseKeywordDropdownConfig: DropdownConfig = {
    displayProperty: 'keyword',
    valueProperty: 'id',
    placeholder: 'Select response keyword...',
    searchPlaceholder: 'Search and select response keyword...',
    noResultsText: 'No response keywords found',
    icon: 'bi-key',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private interpretedResponseService: InterpretedResponseService,
    private claimStatusService: ClaimStatusService,
    private responseKeywordService: ResponseKeywordService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.interpretedResponseForm = this.fb.group({
      claimStatusID: ['', Validators.required],
      responseKeywordID: ['', Validators.required],
      status: ['', Validators.required],
      interpretedText: ['', Validators.required]
    });
    this.loadClaimStatuses();
    this.loadResponseKeywords();
  }

  loadClaimStatuses(): void {
    this.claimStatusService.getAll().subscribe(claimStatuses => this.claimStatuses = claimStatuses);
  }

  loadResponseKeywords(): void {
    this.responseKeywordService.getAll().subscribe(responseKeywords => this.responseKeywords = responseKeywords);
  }

  onClaimStatusSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedClaimStatus = selectedOption as ClaimStatus;
      this.interpretedResponseForm.get('claimStatusID')?.setValue(selectedClaimStatus.id);
    } else {
      this.interpretedResponseForm.get('claimStatusID')?.setValue('');
    }
  }

  onResponseKeywordSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedResponseKeyword = selectedOption as ResponseKeyword;
      this.interpretedResponseForm.get('responseKeywordID')?.setValue(selectedResponseKeyword.id);
    } else {
      this.interpretedResponseForm.get('responseKeywordID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.interpretedResponseForm.valid) {
      const interpretedResponse: InterpretedResponse = this.interpretedResponseForm.value;
      this.interpretedResponseService.create(interpretedResponse).subscribe({
        next: () => {
          this.interpretedResponseForm.reset();
          this.router.navigate(['/interpreted-response']);
        },
        error: (err) => {
          console.error('Error adding interpreted response:', err);
        }
      });
    } else {
      this.interpretedResponseForm.markAllAsTouched();
    }
  }
} 