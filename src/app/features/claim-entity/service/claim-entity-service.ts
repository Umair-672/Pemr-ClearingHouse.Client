import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClaimEntity } from '../model/claim-entity.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class ClaimEntityService extends BaseApiService<ClaimEntity> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 