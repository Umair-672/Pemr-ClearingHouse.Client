import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseKeywordFieldService } from '../../service/response-keyword-field-service';
import { ResponseKeywordService } from '../../../response-keyword/service/response-keyword-service';
import { InterpretedResponseService } from '../../../interpreted-response/service/interpreted-response-service';
import { Router } from '@angular/router';
import { ResponseKeywordField } from '../../model/response-keyword-field.model';
import { ResponseKeyword } from '../../../response-keyword/model/response-keyword.model';
import { InterpretedResponse } from '../../../interpreted-response/model/interpreted-response.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-response-keyword-field-form-add-component',
  templateUrl: './response-keyword-field-form-add-component.html',
  standalone: false
})
export class ResponseKeywordFieldFormAddComponent implements OnInit {
  responseKeywordFieldForm!: FormGroup;
  responseKeywords: ResponseKeyword[] = [];
  interpretedResponses: InterpretedResponse[] = [];

  responseKeywordDropdownConfig: DropdownConfig = {
    displayProperty: 'keyword',
    valueProperty: 'id',
    placeholder: 'Select response keyword...',
    searchPlaceholder: 'Search and select response keyword...',
    noResultsText: 'No response keywords found',
    icon: 'bi-key',
    maxHeight: '200px',
  };

  interpretedResponseDropdownConfig: DropdownConfig = {
    displayProperty: 'interpretedText',
    valueProperty: 'id',
    placeholder: 'Select interpreted response...',
    searchPlaceholder: 'Search and select interpreted response...',
    noResultsText: 'No interpreted responses found',
    icon: 'bi-chat-text',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private responseKeywordFieldService: ResponseKeywordFieldService,
    private responseKeywordService: ResponseKeywordService,
    private interpretedResponseService: InterpretedResponseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.responseKeywordFieldForm = this.fb.group({
      responseKeywordID: ['', Validators.required],
      interpretedResponseID: ['', Validators.required]
    });
    this.loadResponseKeywords();
    this.loadInterpretedResponses();
  }

  loadResponseKeywords(): void {
    this.responseKeywordService.getAll().subscribe(responseKeywords => this.responseKeywords = responseKeywords);
  }

  loadInterpretedResponses(): void {
    this.interpretedResponseService.getAll().subscribe(interpretedResponses => this.interpretedResponses = interpretedResponses);
  }

  onResponseKeywordSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedResponseKeyword = selectedOption as ResponseKeyword;
      this.responseKeywordFieldForm.get('responseKeywordID')?.setValue(selectedResponseKeyword.id);
    } else {
      this.responseKeywordFieldForm.get('responseKeywordID')?.setValue('');
    }
  }

  onInterpretedResponseSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInterpretedResponse = selectedOption as InterpretedResponse;
      this.responseKeywordFieldForm.get('interpretedResponseID')?.setValue(selectedInterpretedResponse.id);
    } else {
      this.responseKeywordFieldForm.get('interpretedResponseID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.responseKeywordFieldForm.valid) {
      const responseKeywordField: ResponseKeywordField = this.responseKeywordFieldForm.value;
      this.responseKeywordFieldService.create(responseKeywordField).subscribe({
        next: () => {
          this.responseKeywordFieldForm.reset();
          this.router.navigate(['/response-keyword-field']);
        },
        error: (err) => {
          console.error('Error adding response keyword field:', err);
        }
      });
    } else {
      this.responseKeywordFieldForm.markAllAsTouched();
    }
  }
} 