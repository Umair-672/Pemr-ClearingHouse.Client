import { Component, OnInit } from '@angular/core';
import { InterpretedResponseFieldService } from '../../service/interpreted-response-field-service';
import { InterpretedResponseField } from '../../model/interpreted-response-field.model';

@Component({
  selector: 'app-interpreted-response-field-form-list-component',
  templateUrl: './interpreted-response-field-form-list-component.html',
  standalone: false,
  styleUrls: ['./interpreted-response-field-form-list-component.scss']
})
export class InterpretedResponseFieldFormListComponent implements OnInit {
  interpretedResponseFields: InterpretedResponseField[] = [];
  selectedInterpretedResponseField: InterpretedResponseField | null = null;
  showDeleteModal = false;

  constructor(private interpretedResponseFieldService: InterpretedResponseFieldService) {}

  ngOnInit(): void {
    this.loadInterpretedResponseFields();
  }

  loadInterpretedResponseFields(): void {
    this.interpretedResponseFieldService.getAll().subscribe(interpretedResponseFields => this.interpretedResponseFields = interpretedResponseFields);
  }

  openDeleteDialog(interpretedResponseField: InterpretedResponseField) {
    this.selectedInterpretedResponseField = interpretedResponseField;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInterpretedResponseField) {
      this.interpretedResponseFieldService.delete(this.selectedInterpretedResponseField.id!).subscribe(() => this.loadInterpretedResponseFields());
    }
  }
} 