import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrganization } from '../model/organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private baseUrl = 'http://localhost:5025/api/Organizations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IOrganization[]> {
    return this.http.get<IOrganization[]>(this.baseUrl);
  }

  getById(id: string): Observable<IOrganization> {
    return this.http.get<IOrganization>(`${this.baseUrl}/${id}`);
  }

  create(org: IOrganization): Observable<IOrganization> {
    return this.http.post<IOrganization>(this.baseUrl, org);
  }

  update(id: string, org: IOrganization): Observable<IOrganization> {
    return this.http.put<IOrganization>(`${this.baseUrl}/${id}`, org);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
