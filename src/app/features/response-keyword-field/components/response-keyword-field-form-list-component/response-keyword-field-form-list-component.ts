import { Component, OnInit } from '@angular/core';
import { ResponseKeywordFieldService } from '../../service/response-keyword-field-service';
import { ResponseKeywordField } from '../../model/response-keyword-field.model';

@Component({
  selector: 'app-response-keyword-field-form-list-component',
  templateUrl: './response-keyword-field-form-list-component.html',
  standalone: false,
  styleUrls: ['./response-keyword-field-form-list-component.scss']
})
export class ResponseKeywordFieldFormListComponent implements OnInit {
  responseKeywordFields: ResponseKeywordField[] = [];
  selectedResponseKeywordField: ResponseKeywordField | null = null;
  showDeleteModal = false;

  constructor(private responseKeywordFieldService: ResponseKeywordFieldService) {}

  ngOnInit(): void {
    this.loadResponseKeywordFields();
  }

  loadResponseKeywordFields(): void {
    this.responseKeywordFieldService.getAll().subscribe(responseKeywordFields => this.responseKeywordFields = responseKeywordFields);
  }

  openDeleteDialog(responseKeywordField: ResponseKeywordField) {
    this.selectedResponseKeywordField = responseKeywordField;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedResponseKeywordField) {
      this.responseKeywordFieldService.delete(this.selectedResponseKeywordField.id!).subscribe(() => this.loadResponseKeywordFields());
    }
  }
} 