import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterpretedResponseFieldService } from '../../service/interpreted-response-field-service';
import { InterpretedResponseService } from '../../../interpreted-response/service/interpreted-response-service';
import { InterpretationFieldService } from '../../../interpretation-field/service/interpretation-field-service';
import { InterpretedResponseField } from '../../model/interpreted-response-field.model';
import { InterpretedResponse } from '../../../interpreted-response/model/interpreted-response.model';
import { InterpretationField } from '../../../interpretation-field/model/interpretation-field.model';

@Component({
  selector: 'app-interpreted-response-field-form-edit-component',
  templateUrl: './interpreted-response-field-form-edit-component.html',
  standalone: false
})
export class InterpretedResponseFieldFormEditComponent implements OnInit {
  interpretedResponseFieldForm!: FormGroup;
  interpretedResponseFieldId!: string;
  interpretedResponses: InterpretedResponse[] = [];
  interpretationFields: InterpretationField[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private interpretedResponseFieldService: InterpretedResponseFieldService,
    private interpretedResponseService: InterpretedResponseService,
    private interpretationFieldService: InterpretationFieldService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.interpretedResponseFieldId = this.route.snapshot.paramMap.get('id') || '';
    this.interpretedResponseFieldForm = this.fb.group({
      interpretedResponseID: ['', Validators.required],
      interpretationFieldID: ['', Validators.required]
    });
    this.loadInterpretedResponses();
    this.loadInterpretationFields();
    if (this.interpretedResponseFieldId) {
      this.loading = true;
      this.interpretedResponseFieldService.getById(this.interpretedResponseFieldId).subscribe({
        next: (interpretedResponseField: InterpretedResponseField) => {
          this.interpretedResponseFieldForm.patchValue(interpretedResponseField);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  loadInterpretedResponses(): void {
    this.interpretedResponseService.getAll().subscribe(interpretedResponses => this.interpretedResponses = interpretedResponses);
  }

  loadInterpretationFields(): void {
    this.interpretationFieldService.getAll().subscribe(interpretationFields => this.interpretationFields = interpretationFields);
  }

  getSelectedInterpretedResponseName(): string {
    const selectedId = this.interpretedResponseFieldForm.get('interpretedResponseID')?.value;
    return this.interpretedResponses.find(i => i.id === selectedId)?.interpretedText ?? '';
  }

  getSelectedInterpretationFieldName(): string {
    const selectedId = this.interpretedResponseFieldForm.get('interpretationFieldID')?.value;
    return this.interpretationFields.find(f => f.id === selectedId)?.name ?? '';
  }

  onSubmit(): void {
    if (this.interpretedResponseFieldForm.valid) {
      const updatedInterpretedResponseField = this.interpretedResponseFieldForm.value;
      this.interpretedResponseFieldService.update(this.interpretedResponseFieldId, updatedInterpretedResponseField).subscribe({
        next: () => {
          this.router.navigate(['/interpretedResponseField']);
        },
        error: (err) => {
          console.error('Error updating interpreted response field:', err);
        }
      });
    } else {
      this.interpretedResponseFieldForm.markAllAsTouched();
    }
  }
}
