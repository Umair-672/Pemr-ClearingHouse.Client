import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaytoAddress } from '../model/payto-address.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class PaytoAddressService extends BaseApiService<PaytoAddress> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 