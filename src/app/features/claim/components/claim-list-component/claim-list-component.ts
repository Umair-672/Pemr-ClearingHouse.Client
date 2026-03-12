import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../service/claim-service';
import { Claim } from '../../model/claim.model';

@Component({
  selector: 'app-claim-list-component',
  templateUrl: './claim-list-component.html',
  styleUrls: ['./claim-list-component.scss'],
  standalone: false
})
export class ClaimListComponent implements OnInit {
  items: Claim[] = [];
  selectedItem: Claim | null = null;
  showDeleteModal = false;

  constructor(private service: ClaimService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: Claim) {
    this.selectedItem = item;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedItem) {
      this.service.delete(this.selectedItem.id!).subscribe(() => this.loadItems());
    }
  }
} 