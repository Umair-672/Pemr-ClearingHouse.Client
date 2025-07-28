import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganization } from '../model/organization.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseApiService<IOrganization> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
