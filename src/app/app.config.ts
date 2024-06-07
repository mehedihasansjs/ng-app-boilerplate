import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BASE_URL, baseUrlFactory, ConfigService, configLoaderFactory, CONFIG, configFactory } from '@core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configLoaderFactory,
      deps: [ ConfigService ],
      multi: true
    },
    {
      provide: BASE_URL,
      useFactory: baseUrlFactory,
      deps: [ ConfigService ]
    },
    {
      provide: CONFIG,
      useFactory: configFactory,
      deps: [ ConfigService ]
    },
  ]
};
