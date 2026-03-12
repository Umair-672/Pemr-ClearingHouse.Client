import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { X12Standard } from '../model/x12-standard.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class X12StandardService extends BaseApiService<X12Standard> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 