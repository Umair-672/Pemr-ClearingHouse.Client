import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FTPSettings } from '../model/ftp-settings.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class FTPSettingsService extends BaseApiService<FTPSettings> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
} 