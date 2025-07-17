import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payer } from '../model/payer.model';
import { BaseApiService } from '../../../shared/services/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class PayerService extends BaseApiService<Payer> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:5025/api/Payers');
  }
}
