import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  BASE_URL,
  baseUrlFactory,
  ConfigService,
  configLoaderFactory,
  CONFIG,
  configFactory,
  ICONS,
} from '@core';
import { provideSvgIconsConfig } from '@ngneat/svg-icon';
import { warningIcon } from '@icons/warning';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideSvgIconsConfig({
      icons: ICONS,
      sizes: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
      },
      defaultSize: 'md',
      missingIconFallback: warningIcon,
    }),
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
