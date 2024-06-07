import { Config, ConfigService } from '@core';
import { firstValueFrom } from 'rxjs';

export function configLoaderFactory(configService: ConfigService): () => Promise<void> {
  return () => firstValueFrom(configService.load('/data/config.json'))
  .then((config: Config) => {
    configService.set(config);
  })
  .catch(err => {
    console.error('Error loading config', err);
  });
}
