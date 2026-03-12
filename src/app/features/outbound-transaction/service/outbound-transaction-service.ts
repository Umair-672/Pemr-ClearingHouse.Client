import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutboundTransaction } from '../model/outbound-transaction.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class OutboundTransactionService extends BaseApiService<OutboundTransaction> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 