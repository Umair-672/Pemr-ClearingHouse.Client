import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganization } from '../model/organization.model';
import { BaseApiService } from '../../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseApiService<IOrganization> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/Organizations');
  }
}
