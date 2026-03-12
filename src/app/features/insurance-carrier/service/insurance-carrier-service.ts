import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsuranceCarrier } from '../model/insurance-carrier.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class InsuranceCarrierService extends BaseApiService<InsuranceCarrier> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 