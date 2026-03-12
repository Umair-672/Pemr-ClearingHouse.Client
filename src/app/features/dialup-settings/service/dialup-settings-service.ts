import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialupSettings } from '../model/dialup-settings.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class DialupSettingsService extends BaseApiService<DialupSettings> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 