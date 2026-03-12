import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../model/claim.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class ClaimService extends BaseApiService<Claim> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 