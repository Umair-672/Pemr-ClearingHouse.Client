
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from '../model/subscriber.model';
import { BaseApiService } from '../../../shared/services/base-api.service';
import { ApiUrlService } from '../../../shared/services/api-url.service';

@Injectable({ providedIn: 'root' })
export class SubscriberService extends BaseApiService<Subscriber> {
  constructor(http: HttpClient, _apiUrlService: ApiUrlService) {
    super(http, _apiUrlService);
  }
}
