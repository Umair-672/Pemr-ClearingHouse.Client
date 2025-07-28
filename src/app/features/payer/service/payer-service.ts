import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payer } from '../model/payer.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class PayerService extends BaseApiService<Payer> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
