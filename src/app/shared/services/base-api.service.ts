import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseApiService<T> {
  constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, entity);
  }

  update(id: string, entity: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, entity);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
} 