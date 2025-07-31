import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterpretedResponseService } from '../../service/interpreted-response-service';
import { ClaimStatusService } from '../../../claim-status/service/claim-status-service';
import { ResponseKeywordService } from '../../../response-keyword/service/response-keyword-service';
import { InterpretedResponse } from '../../model/interpreted-response.model';
import { ClaimStatus } from '../../../claim-status/model/claim-status.model';
import { ResponseKeyword } from '../../../response-keyword/model/response-keyword.model';

@Component({
  selector: 'app-interpreted-response-form-edit-component',
  templateUrl: './interpreted-response-form-edit-component.html',
  standalone: false
})
export class InterpretedResponseFormEditComponent implements OnInit {
  interpretedResponseForm!: FormGroup;
  interpretedResponseId!: string;
  claimStatuses: ClaimStatus[] = [];
  responseKeywords: ResponseKeyword[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private interpretedResponseService: InterpretedResponseService,
    private claimStatusService: ClaimStatusService,
    private responseKeywordService: ResponseKeywordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interpretedResponseId = this.route.snapshot.paramMap.get('id') || '';
    this.interpretedResponseForm = this.fb.group({
      claimStatusID: ['', Validators.required],
      responseKeywordID: ['', Validators.required],
      status: ['', Validators.required],
      interpretedText: ['', Validators.required]
    });
    this.loadClaimStatuses();
    this.loadResponseKeywords();
    if (this.interpretedResponseId) {
      this.loading = true;
      this.interpretedResponseService.getById(this.interpretedResponseId).subscribe({
        next: (interpretedResponse: InterpretedResponse) => {
          this.interpretedResponseForm.patchValue(interpretedResponse);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadClaimStatuses(): void {
    this.claimStatusService.getAll().subscribe(claimStatuses => this.claimStatuses = claimStatuses);
  }

  loadResponseKeywords(): void {
    this.responseKeywordService.getAll().subscribe(responseKeywords => this.responseKeywords = responseKeywords);
  }

  getSelectedClaimStatusName(): string {
    const selectedId = this.interpretedResponseForm.get('claimStatusID')?.value;
    return this.claimStatuses.find(c => c.id === selectedId)?.status ?? '';
  }

  getSelectedResponseKeywordName(): string {
    const selectedId = this.interpretedResponseForm.get('responseKeywordID')?.value;
    return this.responseKeywords.find(r => r.id === selectedId)?.keyword ?? '';
  }

  onSubmit(): void {
    if (this.interpretedResponseForm.valid) {
      const updatedInterpretedResponse = this.interpretedResponseForm.value;
      this.interpretedResponseService.update(this.interpretedResponseId, updatedInterpretedResponse).subscribe({
        next: () => {
          this.router.navigate(['/interpreted-response']);
        },
        error: (err) => {
          console.error('Error updating interpreted response:', err);
        }
      });
    } else {
      this.interpretedResponseForm.markAllAsTouched();
    }
  }
} 