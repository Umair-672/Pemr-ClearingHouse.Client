import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InboundTransaction } from '../model/inboundTransaction';
import { BaseApiService } from '../../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class InboundTransactionService extends BaseApiService<InboundTransaction> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/InboundTransaction'); // Adjust the endpoint as needed
  }
}
