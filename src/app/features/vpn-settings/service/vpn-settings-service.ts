import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VPNSettings } from '../model/vpn-settings.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class VPNSettingsService extends BaseApiService<VPNSettings> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 