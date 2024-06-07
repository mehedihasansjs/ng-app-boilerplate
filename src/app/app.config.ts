import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Config, ConfigService } from '@core';

import { routes } from './app.routes';

export function initConfig(configService: ConfigService): () => Promise<void> {
  return () => firstValueFrom(configService.load('/data/config.json'))
    .then((config: Config) => {
      configService.set(config);
    })
    .catch(err => {
      console.error('Error loading config', err);
    });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ ConfigService ],
      multi: true
    }
  ]
};
