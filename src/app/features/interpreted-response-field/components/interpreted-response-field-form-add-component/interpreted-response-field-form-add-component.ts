import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterpretedResponseFieldService } from '../../service/interpreted-response-field-service';
import { InterpretedResponseService } from '../../../interpreted-response/service/interpreted-response-service';
import { InterpretationFieldService } from '../../../interpretation-field/service/interpretation-field-service';
import { Router } from '@angular/router';
import { InterpretedResponseField } from '../../model/interpreted-response-field.model';
import { InterpretedResponse } from '../../../interpreted-response/model/interpreted-response.model';
import { InterpretationField } from '../../../interpretation-field/model/interpretation-field.model';
import { DropdownConfig, DropdownOption } from '../../../../shared/components/searchable-dropdown/searchable-dropdown.component';

@Component({
  selector: 'app-interpreted-response-field-form-add-component',
  templateUrl: './interpreted-response-field-form-add-component.html',
  standalone: false
})
export class InterpretedResponseFieldFormAddComponent implements OnInit {
  interpretedResponseFieldForm!: FormGroup;
  interpretedResponses: InterpretedResponse[] = [];
  interpretationFields: InterpretationField[] = [];

  interpretedResponseDropdownConfig: DropdownConfig = {
    displayProperty: 'interpretedText',
    valueProperty: 'id',
    placeholder: 'Select interpreted response...',
    searchPlaceholder: 'Search and select interpreted response...',
    noResultsText: 'No interpreted responses found',
    icon: 'bi-chat-text',
    maxHeight: '200px',
  };

  interpretationFieldDropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select interpretation field...',
    searchPlaceholder: 'Search and select interpretation field...',
    noResultsText: 'No interpretation fields found',
    icon: 'bi-ui-checks',
    maxHeight: '200px',
  };

  constructor(
    private fb: FormBuilder,
    private interpretedResponseFieldService: InterpretedResponseFieldService,
    private interpretedResponseService: InterpretedResponseService,
    private interpretationFieldService: InterpretationFieldService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.interpretedResponseFieldForm = this.fb.group({
      interpretedResponseID: ['', Validators.required],
      interpretationFieldID: ['', Validators.required]
    });
    this.loadInterpretedResponses();
    this.loadInterpretationFields();
  }

  loadInterpretedResponses(): void {
    this.interpretedResponseService.getAll().subscribe(interpretedResponses => this.interpretedResponses = interpretedResponses);
  }

  loadInterpretationFields(): void {
    this.interpretationFieldService.getAll().subscribe(interpretationFields => this.interpretationFields = interpretationFields);
  }

  onInterpretedResponseSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInterpretedResponse = selectedOption as InterpretedResponse;
      this.interpretedResponseFieldForm.get('interpretedResponseID')?.setValue(selectedInterpretedResponse.id);
    } else {
      this.interpretedResponseFieldForm.get('interpretedResponseID')?.setValue('');
    }
  }

  onInterpretationFieldSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedInterpretationField = selectedOption as InterpretationField;
      this.interpretedResponseFieldForm.get('interpretationFieldID')?.setValue(selectedInterpretationField.id);
    } else {
      this.interpretedResponseFieldForm.get('interpretationFieldID')?.setValue('');
    }
  }

  onSubmit(): void {
    if (this.interpretedResponseFieldForm.valid) {
      const interpretedResponseField: InterpretedResponseField = this.interpretedResponseFieldForm.value;
      this.interpretedResponseFieldService.create(interpretedResponseField).subscribe({
        next: () => {
          this.interpretedResponseFieldForm.reset();
          this.router.navigate(['/interpreted-response-field']);
        },
        error: (err) => {
          console.error('Error adding interpreted response field:', err);
        }
      });
    } else {
      this.interpretedResponseFieldForm.markAllAsTouched();
    }
  }
} 