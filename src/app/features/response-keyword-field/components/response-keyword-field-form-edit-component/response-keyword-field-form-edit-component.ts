import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseKeywordFieldService } from '../../service/response-keyword-field-service';
import { ResponseKeywordService } from '../../../response-keyword/service/response-keyword-service';
import { InterpretedResponseService } from '../../../interpreted-response/service/interpreted-response-service';
import { ResponseKeywordField } from '../../model/response-keyword-field.model';
import { ResponseKeyword } from '../../../response-keyword/model/response-keyword.model';
import { InterpretedResponse } from '../../../interpreted-response/model/interpreted-response.model';

@Component({
  selector: 'app-response-keyword-field-form-edit-component',
  templateUrl: './response-keyword-field-form-edit-component.html',
  standalone: false
})
export class ResponseKeywordFieldFormEditComponent implements OnInit {
  responseKeywordFieldForm!: FormGroup;
  responseKeywordFieldId!: string;
  responseKeywords: ResponseKeyword[] = [];
  interpretedResponses: InterpretedResponse[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private responseKeywordFieldService: ResponseKeywordFieldService,
    private responseKeywordService: ResponseKeywordService,
    private interpretedResponseService: InterpretedResponseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.responseKeywordFieldId = this.route.snapshot.paramMap.get('id') || '';
    this.responseKeywordFieldForm = this.fb.group({
      responseKeywordID: ['', Validators.required],
      interpretedResponseID: ['', Validators.required]
    });
    this.loadResponseKeywords();
    this.loadInterpretedResponses();
    if (this.responseKeywordFieldId) {
      this.loading = true;
      this.responseKeywordFieldService.getById(this.responseKeywordFieldId).subscribe({
        next: (responseKeywordField: ResponseKeywordField) => {
          this.responseKeywordFieldForm.patchValue(responseKeywordField);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadResponseKeywords(): void {
    this.responseKeywordService.getAll().subscribe(responseKeywords => this.responseKeywords = responseKeywords);
  }

  loadInterpretedResponses(): void {
    this.interpretedResponseService.getAll().subscribe(interpretedResponses => this.interpretedResponses = interpretedResponses);
  }

  getSelectedResponseKeywordName(): string {
    const selectedId = this.responseKeywordFieldForm.get('responseKeywordID')?.value;
    return this.responseKeywords.find(r => r.id === selectedId)?.keyword ?? '';
  }

  getSelectedInterpretedResponseName(): string {
    const selectedId = this.responseKeywordFieldForm.get('interpretedResponseID')?.value;
    return this.interpretedResponses.find(i => i.id === selectedId)?.interpretedText ?? '';
  }

  onSubmit(): void {
    if (this.responseKeywordFieldForm.valid) {
      const updatedResponseKeywordField = this.responseKeywordFieldForm.value;
      this.responseKeywordFieldService.update(this.responseKeywordFieldId, updatedResponseKeywordField).subscribe({
        next: () => {
          this.router.navigate(['/response-keyword-field']);
        },
        error: (err) => {
          console.error('Error updating response keyword field:', err);
        }
      });
    } else {
      this.responseKeywordFieldForm.markAllAsTouched();
    }
  }
} 