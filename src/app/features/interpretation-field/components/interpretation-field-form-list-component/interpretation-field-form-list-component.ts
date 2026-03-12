import { Component, OnInit } from '@angular/core';
import { InterpretationFieldService } from '../../service/interpretation-field-service';
import { InterpretationField } from '../../model/interpretation-field.model';

@Component({
  selector: 'app-interpretation-field-form-list-component',
  templateUrl: './interpretation-field-form-list-component.html',
  standalone: false,
  styleUrls: ['./interpretation-field-form-list-component.scss']
})
export class InterpretationFieldFormListComponent implements OnInit {
  interpretationFields: InterpretationField[] = [];
  selectedInterpretationField: InterpretationField | null = null;
  showDeleteModal = false;

  constructor(private interpretationFieldService: InterpretationFieldService) {}

  ngOnInit(): void {
    this.loadInterpretationFields();
  }

  loadInterpretationFields(): void {
    this.interpretationFieldService.getAll().subscribe(interpretationFields => this.interpretationFields = interpretationFields);
  }

  openDeleteDialog(interpretationField: InterpretationField) {
    this.selectedInterpretationField = interpretationField;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInterpretationField) {
      this.interpretationFieldService.delete(this.selectedInterpretationField.id!).subscribe(() => this.loadInterpretationFields());
    }
  }
} 