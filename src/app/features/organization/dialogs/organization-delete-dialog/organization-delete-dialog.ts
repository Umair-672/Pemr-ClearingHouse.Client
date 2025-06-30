import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationService } from '../../services/organization-service';
import { IOrganization } from '../../model/organization.model';

@Component({
  selector: 'app-organization-delete-dialog',
  standalone: false,
  templateUrl: './organization-delete-dialog.html',
  styleUrl: './organization-delete-dialog.scss'
})
export class OrganizationDeleteDialog {
  @Input() show = false;
  @Output() closed = new EventEmitter<boolean>();
  loading = false;

  constructor() {}

  close() {
    this.closed.emit(false);
  }

  confirmDelete() {
    this.closed.emit(true);
  }
}
