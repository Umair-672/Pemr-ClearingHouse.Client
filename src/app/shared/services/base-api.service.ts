import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';

export class BaseApiService<T> {
  constructor(
    protected http: HttpClient,
    private _apiUrlService: ApiUrlService
  ) {}

  protected get controllerName(): string {
    return this.constructor.name.replace(/^_*/, '').replace(/Service$/, '');
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this._apiUrlService.getBaseUrl(this.controllerName));
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(this._apiUrlService.getUpdationUrl(id, this.controllerName));
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this._apiUrlService.getBaseUrl(this.controllerName), entity);
  }

  update(id: string, entity: T): Observable<T> {
    return this.http.put<T>(this._apiUrlService.getUpdationUrl(id, this.controllerName), entity);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this._apiUrlService.getUpdationUrl(id, this.controllerName));
  }
}
