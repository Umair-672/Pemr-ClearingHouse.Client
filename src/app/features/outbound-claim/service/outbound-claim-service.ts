import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutboundClaim } from '../model/outbound-claim.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class OutboundClaimService extends BaseApiService<OutboundClaim> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 