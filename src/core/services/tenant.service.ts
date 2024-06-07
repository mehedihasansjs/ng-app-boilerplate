import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '@core';
import { Observable } from 'rxjs';

@Injectable()
export class TenantService {
  private endpoint: string = `${this.baseURL}/tenants`

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseURL: string
  ) {
  }

  getByDomain(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/domain`);
  }
}
