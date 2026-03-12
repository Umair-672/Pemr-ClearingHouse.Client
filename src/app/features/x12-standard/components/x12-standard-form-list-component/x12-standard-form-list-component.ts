import { Component, OnInit } from '@angular/core';
import { X12StandardService } from '../../service/x12-standard-service';
import { X12Standard } from '../../model/x12-standard.model';

@Component({
  selector: 'app-x12-standard-form-list-component',
  templateUrl: './x12-standard-form-list-component.html',
  standalone: false,
  styleUrls: ['./x12-standard-form-list-component.scss']
})
export class X12StandardFormListComponent implements OnInit {
  x12Standards: X12Standard[] = [];
  selectedX12Standard: X12Standard | null = null;
  showDeleteModal = false;

  constructor(private x12StandardService: X12StandardService) {}

  ngOnInit(): void {
    this.loadX12Standards();
  }

  loadX12Standards(): void {
    this.x12StandardService.getAll().subscribe(x12Standards => this.x12Standards = x12Standards);
  }

  openDeleteDialog(x12Standard: X12Standard) {
    this.selectedX12Standard = x12Standard;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedX12Standard) {
      this.x12StandardService.delete(this.selectedX12Standard.id!).subscribe(() => this.loadX12Standards());
    }
  }
} 