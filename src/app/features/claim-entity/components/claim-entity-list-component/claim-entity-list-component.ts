import { Component, OnInit } from '@angular/core';
import { ClaimEntityService } from '../../service/claim-entity-service';
import { ClaimEntity } from '../../model/claim-entity.model';

@Component({
  selector: 'app-claim-entity-list-component',
  templateUrl: './claim-entity-list-component.html',
  styleUrls: ['./claim-entity-list-component.scss'],
  standalone: false
})
export class ClaimEntityListComponent implements OnInit {
  items: ClaimEntity[] = [];
  selectedItem: ClaimEntity | null = null;
  showDeleteModal = false;

  constructor(private service: ClaimEntityService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.service.getAll().subscribe(items => this.items = items);
  }

  openDeleteDialog(item: ClaimEntity) {
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
