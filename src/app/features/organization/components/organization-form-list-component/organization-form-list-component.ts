import { Component, OnInit } from '@angular/core';
import { IOrganization } from '../../model/organization.model';
import { OrganizationService } from '../../services/organization-service';

@Component({
  selector: 'app-organization-form-list-component',
  standalone: false,
  templateUrl: './organization-form-list-component.html',
  styleUrl: './organization-form-list-component.scss'
})
export class OrganizationFormListComponent implements OnInit {
  organizations: IOrganization[] = [];
  selectedOrg: IOrganization | null = null;
  isEdit = false;
  showModal = false;

  showDeleteModal = false;

  constructor(private orgService: OrganizationService) {}

  ngOnInit() {
    this.loadOrganizations();
  }

  loadOrganizations() {
  this.orgService.getAll().subscribe(data => {
    this.organizations = data;
  });
}

  AddOrganization() {
    this.selectedOrg = { organizationName: '', email: '', isActive: true };
    this.isEdit = false;
    this.showModal = true;
  }

  EditOrganization(org: IOrganization) {
    this.selectedOrg = { ...org };
    this.isEdit = true;
    this.showModal = true;
  }

  saveOrganization() {
    if (!this.selectedOrg) return;
    if (this.isEdit && this.selectedOrg.id) {
      this.orgService.update(this.selectedOrg.id!, this.selectedOrg).subscribe(() => {
        this.loadOrganizations();
        this.closeOrganization();
      });
    } else {
      this.orgService.create(this.selectedOrg).subscribe(() => {
        this.loadOrganizations();
        this.closeOrganization();
      });
    }
  }

  deleteOrganization(org: IOrganization) {
    this.selectedOrg = org;
    this.showDeleteModal = true;
  }

  closeOrganization() {
    this.showModal = false;
    this.selectedOrg = null;
    this.isEdit = false;
  }

  onClosed(event: boolean) {
    if (event) {
      const id: string = this.selectedOrg?.id || '';
      this.orgService.delete(id).subscribe(() => {
        this.loadOrganizations();
        this.selectedOrg = null;
      });
    }

    this.showDeleteModal = false;
  }
}
