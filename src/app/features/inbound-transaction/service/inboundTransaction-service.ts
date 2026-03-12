import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InboundTransaction } from '../model/inboundTransaction';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class InboundTransactionService extends BaseApiService<InboundTransaction> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
