import { Component, OnInit } from '@angular/core';
import { InterpretationEntityService } from '../../service/interpretation-entity-service';
import { InterpretationEntity } from '../../model/interpretation-entity.model';

@Component({
  selector: 'app-interpretation-entity-form-list-component',
  templateUrl: './interpretation-entity-form-list-component.html',
  standalone: false,
  styleUrls: ['./interpretation-entity-form-list-component.scss']
})
export class InterpretationEntityFormListComponent implements OnInit {
  interpretationEntities: InterpretationEntity[] = [];
  selectedInterpretationEntity: InterpretationEntity | null = null;
  showDeleteModal = false;

  constructor(private interpretationEntityService: InterpretationEntityService) {}

  ngOnInit(): void {
    this.loadInterpretationEntities();
  }

  loadInterpretationEntities(): void {
    this.interpretationEntityService.getAll().subscribe(interpretationEntities => this.interpretationEntities = interpretationEntities);
  }

  openDeleteDialog(interpretationEntity: InterpretationEntity) {
    this.selectedInterpretationEntity = interpretationEntity;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedInterpretationEntity) {
      this.interpretationEntityService.delete(this.selectedInterpretationEntity.id!).subscribe(() => this.loadInterpretationEntities());
    }
  }
} 