import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss'],
  standalone: true
})
export class ConfirmDeleteDialogComponent {

  @Input() loading: boolean = false;
  @Input() entityName: string = '';
  @Input() title: string = 'Delete';
  @Output() closed = new EventEmitter<boolean>();
}
