import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '@core';

@Injectable()
export class ConfigService {
  private config!: Config;

  constructor(private http: HttpClient) {}

  load(url: string): Observable<Config> {
    return this.http.get<Config>(url);
  }

  get(): Config {
    return this.config;
  }

  set(config: Config): void {
    this.config = config;
  }
}
