import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';
import { BillingPrvSecondaryIdentification } from '../model/billing-pro-sec-identification.model';

@Injectable({ providedIn: 'root' })
export class BillingPrvSecondaryIdentificationService extends BaseApiService<BillingPrvSecondaryIdentification> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
