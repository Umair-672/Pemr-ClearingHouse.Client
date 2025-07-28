import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  private _baseUrl!: string;

  constructor() {
    this._baseUrl = environment.apiUrl;
  }

  getUpdationUrl(id: string, controllerName: string): string {
    return `${this._baseUrl}/${controllerName}/${id}`;
  }

  getBaseUrl(controllerName: string): string {
    return `${this._baseUrl}/${controllerName}`;
  }
}
